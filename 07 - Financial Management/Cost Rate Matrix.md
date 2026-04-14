---
title: Set Up a Cost and Rate Matrix
tags:
  - admin
aliases:
  - Rate Matrix
canonical: true
audience: finance, pm
domain: financials
---
# Set Up a Cost and Rate Matrix

- Financially Active: Indicates whether the financial attributes for a resource or role are enabled to record financial management activities against an investment.
- Target % Billable: Refers to the percentage of the targeted billing rate that is billable. Enter the target percentage billable for this resource, if applicable. This field is not used in Clarity. It has been provided as a stock attribute so that customers to leverage it for custom reporting.
- Financial Department: Defines the financial department that is associated with an entity in the financial organization structure. The financial department represents the cost center of the resource.
- Financial Location: Defines the financial location that is associated with an entity in the financial organization structure. The financial location represents the location of the resource.
- Transaction Class: Defines the user-defined values that group transaction types for the resource or role and is used in financial transaction processing.
- Resource Class: Defines the category for the financially enabled resource or role and is used with financial transaction processing. If the resource is a labor type, complete the department and location fields to be able to mark the resource as financially active.
- Target Billing Rate: Refers to the targeted billing rate that is billable for the resource. This field is not used in Clarity. It has been provided as a stock attribute so that customers to leverage it for custom reporting.
5. Save your changes.
Set Up a Financial Cost and Rate Matrix
- Example: Set Up a Cost/Rate Matrix Based on Resource Class - Verify the Prerequisites - Create a Cost and Rate Matrix - Assign Columns to the Matrix - Add Rows to the Matrix - Edit the Current Rate - Copy the Current Rate - Increase the Rate for Cost/Rate Matrices - Unlock Matrices
A financial cost and rate matrix is composed of general properties to describe the matrix, and columns that identify the criteria that is used to match the rates and costs to transactions.

You can define a rate matrix that is used during financial transaction processing to determine costs and billing or charge rates.
You can create cost and rate matrices for labor, materials, equipment, and expense resource types.
You can establish default matrices at the system level, entity level, and investment level.

The product looks for and applies matrices first at the investment level, then at the entity level, and finally at the system level.
You can set default rate locations at either the entity level or system level. If a matrix cannot be matched, you can enter costs and rates manually when you create transactions.
Example: Set Up a Cost/Rate Matrix Based on Resource Class
The Document Management Company captures costs in the financial system using the resource class and the input type code of the resources that are assigned to their investments.

The company has four different resource classes that are assigned to two different input type codes.
The resource classes and input type codes have different costs that are associated with them.
For example, billable labor has an actual cost of $100 whereas non-billable labor has no associated cost. The cost for non-labor resource classes is calculated as $1.00 - quantity.
To meet the corporate requirements, the financial manager sets up a cost/rate matrix with five different rows. One row represents each resource class (labor and non-labor) and input type code combination. The manager populates the row

with the appropriate cost. The matrix rows define the criteria for applying costs to resources for transaction processing. The following table shows the matrix rows:

## From Date 1/1/2019 1/1/2019 1/1/2019 1/1/2019 1/1/2019

## To Date 12/31/2019 12/31/2019 12/31/2019 12/31/2019 12/31/2019

## Resource Class Labor Labor Expense Materials Equipment

Input Type Code Billable Non-Billable * * *

Actual Cost $100.00 $0.00 $1.00 $1.00 $1.00

## Verify the Prerequisites
Before you set up a cost/rate matrix, complete these prerequisites:
1. Verify that you understand the following financial management concepts:

- Cost planning versus actuals, fiscal calendar cycles, fiscal time periods and how they are defined in your organization. - The desired outcomes for any type of configuration.
After you start using the configured data to create instance data, you cannot change the configuration.
For example, you cannot delete fiscal time periods, department or location OBS units, or financial classifications that the application is using.
- How you want to set up your organizational structure using entity, and the location and department organizational breakdown structure (OBS) units.
Organization is important because when you use the application or you generate reports, information groups by the outcome desired.
- How your configurations, classifications, and definitions affect the data flow to your third-party integrations and chargebacks processing.
2. Verify that you have created and set up a financial entity as described in How to Set Up a Financial Entity.
3. Verify that you have previously set up a currency.
4. Verify that you have the gathered the following information that is required to plan for your matrix:
a. Determine whether the matrix is based on the resource role, resource, input type code, or charge code, and so on. If it is based on investments or resources, verify that they are financially enabled.
b. Establish a naming convention for the matrix. c. Verify and activate the currency that is required for the matrix. d. Determine if the matrix must be marked private.

If so, determine who must have access to it. e. Create any data to be used in the matrix before the matrix is established. For example, you cannot add the
resource manager role to the matrix until it is added in Resource Management. f. (Optional) Set up cost plus codes to use them for marking up actual or standard costs in the cost/rate matrix.
Create a Cost and Rate Matrix
As a financial manager, you can ensure that standard costs and rates apply to all detailed financial plans and transactions for investments.

Create a standard cost/rate matrix that provides default values from a centralized rate matrix in the financial system.
The standardized default information eliminates the need for defining costs and rates for different financial plans and transactions individually.
Populate the matrix with the following types of financial values:
- Planned costs for investments for use in detailed financial plans. - Billing rates for financial transactions that are processed against the investments.

A rate matrix governs the rate structure that covers all of your pricing models. Depending on your needs, create one or more matrices.

For example, set up one rate matrix for external projects and another one for internal projects.
We recommend that you include labor, materials, equipment, and expense resource types in your matrix.
You can then define costs and rates for labor and non-labor resources for cost planning and financial transaction processing.
We also recommend that you use charge codes to help define costs and rates.
> [!note]
> Copying a cost or rate matrix adds a new matrix using the defined properties of the existing matrix.
Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. Click New and complete the following fields:
- Matrix Name: Enter the unique name to identify this matrix. - Matrix Type: The default Cost/Rate type is selected. - Matrix Default Currency: Defines the default currency for this matrix. This field appears only when multi-currency
is enabled. - Location: Defines the location OBS related to an entity. Rates and costs are applied to transactions only when
there is a match for either the investment, resource, or the entity location OBS. We recommend that you leave this field blank because it can result in no rates being applied.

- Entity: Defines the financial entity that is associated with the matrix.
Rates and costs are applied to transactions only when there is a match for either the investment, resource, or the entity.
We recommend that you leave this field blank because it can result in no rates being applied. - Private: Specifies whether this matrix is restricted to particular users. 3.
Click Save and Continue. Skip to Step 3 in the next procedure.
Assign Columns to the Matrix
Decide which columns are needed in the matrix. For example, to allow investment managers to show a breakdown of their actual capital and operating expenses in the cost plans, assign Cost Type as a column in the matrix.
Determine the column order of the matrix so that evaluation of the transaction is performed correctly. To set up the conditions under which rates are applied, assign up to ten columns to the cost/rate matrix. Transactions are processed using the matrix columns to determine the rates and costs.
The order of the columns determines the weighting and filtering driving the costs and rates. Transaction processing reads the columns from left to right. For example, if the first column is Client and the second is Project only projects that are associated with the client run against this matrix.
Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. In the Matrix Name column, select a matrix.
3. Select a column from the Available list of columns and click Add.The column or field appears in the Selected list.
4. Change the order of selected columns by moving them up or down in the list. Click the up or down arrows. Up
corresponds to left and down corresponds to right in the matrix. 5. Click Save and Continue. Skip to Step 3 in the next procedure.
Add Rows to the Matrix
Complete your cost/rate matrix definition by adding rows of specific values for the matrix columns. For example, if you assigned Resource Role and Transaction Class as matrix columns, create rows by selecting unique combinations of roles and transaction classes.
> [!note]
> Verify that each matrix row is unique and the dates do not overlap.

The matrix rows let you define the criteria for applying rates and costs to investments and resources for transaction processing. The sample matrix in the following table rows define the cost and rate for the Business Analyst role for two different transaction classes.

## From Date

## To Date

1/1/13

12/31/13

1/1/13

12/31/13

## Resource Role
Business Analyst
Business Analyst

## Transaction Class

## Rate

## Employee

## Contract

## Standard Cost Actual Cost

## Currency

## USD

Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. Select a matrix.
3. Click Edit Matrix Rows.
4. Click New.
5. Complete the two required date fields:
- From Date Defines the beginning of the effective date range for this row. Any transaction that is processed within the range is applied the rates/costs from this matrix.
6. Enter values for any matrix columns that you added.
7. Complete the following standard fields for your matrix rows:
- Rate: Defines the billing rate to apply to a transaction for the row. A value of at least 0.00 is required. For equipment, materials, and expenses, rate is equal to the quantity. For example, if the cost of a single server is $1,000.00, then the rate is 1.
- Standard Cost: The standard cost associated with any transaction matching the criteria established in the rate matrix. This attribute is generally not used elsewhere in the product but may be used in developing user-defined cost reporting.
- Actual Cost: Defines the actual cost that is associated with any transaction matching the criteria established in the matrix. Actual Cost can be used in custom reporting.
- Currency: Specifies the currency for the row in the matrix. This value can be different for each row in the matrix and is assigned when a transaction match occurs.This field appears only when multi-currency is enabled.
- Cost Plus Code: Specifies the cost plus code to use when a transaction matches the criteria that is established in the matrix.
8. Click Save and Return.
After completing these three tasks, you have successfully set up a cost/rate matrix. The matrix applies standard costs and rates to all financial transactions from a centralized cost/rate table.

## Edit the Current Rate
You can update the existing rate to reflect any billing or cost structure changes.
Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. Choose the matrix you want to edit.
The Edit Matrix Rows tab will open. 3. Identify the row for the rate you wish to change. 4.
Click the icon between the checkbox and the rate name for that row to open the Matrix Row Properties page.

5. Update the necessary fields with the new values.
6. Click Save And Return to apply your changes.

## Copy the Current Rate
You can copy the existing rate and edit the required information to create a new entry that reflects any adjustments needed for the upcoming fiscal year, allowing for accurate billing and cost management without altering the original rate.
Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. Choose the matrix you want to edit.
3. In this tab, find the row for the rate you wish to copy.
4. Check the box next to the row you want to copy, then click Copy at the bottom of the page.
5. Edit any fields as needed for the new entry.
6. Click Save And Return to finalize the copy.

## Increase the Rate for Cost/Rate Matrices
A rate increase affects the entire matrix. At least one matrix row must exist for you to complete these steps.
Follow these steps:
1. Click Administration, Finance, Manage Matrix.
2. Select a matrix.The Edit Matrix Rows tabbed page appears.
3. Select the check box for a row.
4. Click Rate Increase.
5. Change any of the following entries:
6. Click Preview.
7. Choose either all or some of the rows. If no rows are selected, no new records will be created.
8. Click Submit.
> [!important]
> About values of Rate %, Standard Cost % and Actual Cost %:
- A negative percentage results in a reduction of the Rate/Actual Cost/Standard Cost. - A zero percentage maintains the current Rate/Actual Cost/Standard Cost. - A positive percentage leads to an increase in the Rate/Actual Cost/Standard Cost.
> [!warning]
> Consider the following key points when entering the New Date From and New Date To:
- New dates create new rows/records in the grid. - They DO NOT:

## Enable Cost Plus Codes and Rules

The cost plus mechanism applies mark-ups to actual or standard costs. A **cost plus code** is a named container for one or more **cost plus rules**. Project managers can associate cost plus codes with their projects to enable mark-up calculations using the multiplier (factor), burden, and overhead methods. Cost plus codes are referenced in existing cost/rate matrix rows.

### Create Cost Plus Codes

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Cost Plus Codes**
2. Click **New**
3. Complete the requested information. Key field:
   - **Applies To**: Defines the cost type to which the code applies:
     - **Actual** — The actual amount paid for transactions
     - **Standard** — The blended or burdened rate
4. Save the changes

> [!NOTE]
> If a cost plus code has been used in a transaction, you cannot delete it.

### Create Cost Plus Rules and Add to Cost Plus Codes

Cost plus rules specify the conditions and mark-up amounts that are applied when a transaction matches. Define at least one cost plus rule for each code. You can define unlimited cost plus codes or rules.

> [!TIP]
> To delete a cost plus rule after adding it:
> - To delete the **last** rule added, click **Delete Last Rule**.
> - To delete rules with a lower sequence number than the last rule, delete all higher-sequence rules first.

Follow these steps:

1. Open **Administration**, and from **Finance**, click **Cost Plus Codes**
2. Click the cost plus code to which you want to add a rule
3. In the **Rules in effect** section, click **New**
4. Complete the following fields:

| Field | Description |
|---|---|
| **Units From** | Beginning value for which this rule is invoked |
| **To** | End of the range for invoking the rule |
| **Sequence** | Range of units to which the mark-up applies |
| **Applies To** | What the mark-up applies to (cost, rate, or actual) |
| **Multiplier** | Type of markup to apply for actual or standard cost. Default: Percent |
| **Multiplier Amount** | Percentage amount for the multiplier markup. When invoked, included in total transaction calculation. Default: 0 |
| **Burden** | Type of markup to apply to burden. Default: Percent |
| **Burden Amount** | Percentage for burden markup. Burden = cost (actual or standard) × burden amount. Default: 0 |
| **Overhead** | Mark-up variable for overhead. Default: Percent |
| **Overhead Amount** | Percentage for overhead markup. Overhead = cost (actual or standard) × overhead amount. Default: 0 |

5. Save the changes

Once saved, the cost plus code (with its rules) can be referenced in matrix rows via the **Cost Plus Code** field when adding rows to a cost/rate matrix.

## Related
- [[Cost Plans]]
- [[Financial Entity Setup]]
- [[_MOC Financials]]

%%Source: p2158-2162%%

