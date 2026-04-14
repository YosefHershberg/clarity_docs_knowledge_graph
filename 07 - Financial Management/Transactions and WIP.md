---
title: Financial Transactions and WIP Adjustments
tags:
  - admin
aliases:
  - WIP
  - Transaction Management
canonical: true
audience: finance, pm
domain: financials
---
# Financial Transactions and WIP Adjustments

Lock or Unlock Department Invoices Your finance manager typically uses the department invoice items page to lock and unlock invoices.

When an invoice is submitted, it is automatically locked. When an invoice is locked, transactions cannot be added to the invoice.
If you have access rights to submit invoices, you can temporarily unlock and regenerate last-minute changes.
1. Open Home, and from Organization, click Departments.
2. Open the department and click Invoices. A list of invoices for your department appears.
3. Click the Invoice Number link to open the invoice.
4. Do one of the following steps:
- Click Lock to prevent updates to the invoice. - Click Unlock to open the invoice for updates.
Approve or Reject Department Invoices The department manager typically approves, recalls, or rejects an invoice.

You can change the status of an invoice back to its submitted state by recalling it. When an invoice is approved, you cannot recall or take any action on the invoice.
Any adjustments or reversals that are made to the invoice after approval are included with the next unlocked or future invoice.
When an invoice is rejected, WIP adjustments or changes to debits rules can be made to correct charges. Contact your finance manager for assistance with WIP adjustments.
1. Open Home, and from Organization, click Departments.
2. Open the department and click Invoices. A list of invoices for your department appears.
3. Click an Invoice Number link to open the invoice.
4. Click Approve or Reject.
Regenerate Department Invoices Invoices are updated continually during scheduled runs of the Generate Invoice job.

However, you can manually update an invoice in between scheduled runs and view recently added transactions.
If a recalculation affects multiple invoices and all affected invoices are unlocked, the invoice is updated.
Recalculations are ignored if any invoice affected by the change is locked. If a recalculation is not possible, a message appears.
See Jobs Reference, Generate Invoices job description for more information.
Run the Update Aggregated Data job before regenerating invoices to ensure that the hierarchy data is updated. See Jobs Reference for more information.
1. Open Home, and from Organization, click Departments.
2. Open the department and click Invoices. A list of invoices for your department appears.
3. Click an Invoice Number link to open the invoice.
4. Click Regenerate. A progress bar appears during the regeneration process. When complete, the recalculated invoice
appears. 5. Click the Current Amount or Total Amount link to view transaction details and see the effects any adjustments had on
the invoice.
Set Up Financial Transactions, Voucher Headers, and WIP Adjustments
Transactions capture the total cost of labor, materials, equipment, and other expenses. Transactions can be charged back to departments for services, assets, applications, projects, and other investments. Transactions can be initiated from

timesheets, imported from external systems, or entered manually. Work-in-progress transactions are an important stage in the accounting process that enables you to adjust and review transactions before they get invoiced.
- Transaction Entries - Make Voucher and Resource Types Available for Processing - Create Voucher Headers - Create Transaction Entries - Manage Work-in-Progress (WIP) Transactions - Review Processed Transactions
Transaction Entries
A transaction entry is composed of the following items:
- A voucher header describes transactions and categorizes them by resource type. You must create a voucher header to create transaction entries.
- Line items describing the transaction.
> [!tip]
> Before creating and viewing transactions, log in as a user with the financial properties enabled.
> Enter transactions manually to capture the total cost of investment materials, equipment, labor, and other expenses.

For example, you can use transactions to post the cost of servers that are used for application development and charge the cost to the consuming department that commissioned the application development project.
All transactions are entered as vouchers and then posted to Work-in-Progress (WIP) for the transactions to appear on a department invoice.
Work-in-progress (WIP) is an important, fundamental accounting concept where all costs on an investment are captured and capitalized.

Before transactions can be processed, they must be posted to WIP. You can post transactions to WIP, and can adjust posted WIP transactions, and approve or reject WIP adjustments.
The set of WIP tables contain entered transactions that can be subsequently posted to an accounting system. Post to WIP recognizes negative values when transactions are posted.
Once a transaction has been posted to WIP, it has passed all validation criteria and is available for invoicing and posting to the general ledger (GL).
Detailed records of modifications, adjustments, and billings are logged. You cannot delete posted WIP transactions, but can change them through the WIP adjustment process.
You can search, update, and delete transactions until they are posted to WIP. After they are posted to WIP, you can view, edit, or reject transactions from the WIP adjustment page.
Transactions are used to charge departments for the cost of investments. Transactions that are entered are not posted to integrated financial purchasing or payable systems.

If you have integrated Classic PPM with accounting implementation, we recommend that you enter all purchasing and payable transactions directly through your financial purchasing or payable system.
Example: Capturing Billable Project Costs
Your Application Development team is developing AutoPay software for wireless devices for your client. Your client agreed to pay for all costs that are associated with the project, including development time, test devices, and travel expenses.
- To account for all costs, as the project manager, add labor resources, equipment, and travel expenses to the project.

- Add each resource by resource type to the project as a team member. - Enable the project for financial processing.
- Next quarter, you are asked to account for the various resource types in the system. Create transaction entries using
Voucher Expense for expenses and Voucher Other for the purchase of mobile devices for testing.

1. Create a resource (as needed) for each resource type and financially enable them.
2. (Optional) Create a cost/rate matrix.
3. Add the resource as a team member to the investment.
4. Assign the resource to tasks on the investment.
1. Click Home, Financial Management, Transaction Entry.
2. Click New.
3. Complete the following fields in the General section:
- Entry Type: Defines the voucher type. - Entry Number: Defines a number that is used to track and process the transaction. Limit: Up to 30 characters. - P.O. Number: Defines the purchase order number that is associated with the transaction. Limit: Up to 30
characters. - Vendor: Defines the vendor code of the company or resource that provided the product or service. The vendor
code is required for voucher expenses if no resource is selected in the Incurred By field. - Incurred By: Defines the resource that incurred the expense. The incurred by resource is required for voucher
expenses if no vendor is selected. 4. Click Save to create the voucher header. To create transactions, proceed to the next topic below.
> [!tip]
> The system shows an error if the entry and purchase order numbers exceed 30 characters; however, nothing is recorded in the logs.
1. With the voucher header open, click New.
2. Enter the required information to define the transaction:

- Investment ID: Identifies the investment associated with the transaction. - Task: Identifies the task associated with the transaction. The value for this field is auto-populated if an effort task
exists for the investment. Irrespective of whether other tasks exist for the investment, the effort task appears by default.

You can select any other task for the investment to override the default value. - Cost Type: Identifies the cost type associated with the transaction.
The transaction cost type is used to determine the applicable cost or rate amount (capital versus operating) from the associated cost/rate matrix.
The value is auto-populated provided both Investment ID and Task fields are populated. The default value is based on the effort task cost type.
If the effort task cost type is not defined, the value is populated from the task WBS. If cost type is not defined in the WBS, the value is populated from the investment cost type.
- Charge Code: Identifies the project or task charge code. You can select from all available charge codes or charge codes specific to the project.
- For projects, this field is auto-populated with the project's charge code if the project is assigned a charge code
and the project is selected as the task associated with the transaction.

If a selected task that is assigned a different charge code, this field is auto-populated with the task's charge code.
- For other investments, this field is auto-populated with the investment's charge code if the investment is assigned a charge code. - Resource ID:
Defines the ID of the resource that is associated with the transaction.
A resource can be a person (labor), equipment, material, or an expense depending on the resource type whose costs you are processing for this transaction.
- Role:Defines the role when applying a role-base rate or role-based cost to the transaction.
The resource type for the role must match the resource type for the associated resource. - Transaction Class: Defines the resource's transaction class.
This value is auto-populated if the resource is assigned a transaction class. Otherwise, select a transaction class. - Input Type Code: Defines the resource's input type code.
Auto-populated if the resource is assigned an input type. Otherwise, select an input type. User Value 1 and User Value 2 - Defines custom properties.
Available for selection only if your Classic PPM administrator has created lookup values using Studio. Expense Type:
Defines the expense type to determine how the charge is processed. A capital expense is booked differently than depreciation. - Preserve General Information:
Saves the entered values in the General section when you submit and create a transaction during the same session. Select this check box to save entered values. 3.
Enter transaction information in the Transaction Data section and save the changes: - Quantity: Defines the number of units to calculate the total cost.
This field accepts a negative number. - Cost: Provides the cost that is associated with the transaction.
If a cost/rate matrix is associated with the selected investment, or an entity or system default, you can leave this field blank to use the cost that is defined in the cost/ rate matrix.
Otherwise, enter the actual cost that is associated with the transaction. If multicurrency is not enabled, the default is the system currency.
If multicurrency is enabled, then transaction cost defaults to the active currency that is listed first alphabetically.
For example, if ADP and INR are active - ADP becomes the default currency. Select another currency as needed. - Rate:
Provides the billing rate that is associated with the transaction.
If a cost/rate matrix is associated with the selected investment, or an entity or system default, you can leave this field blank to use the rate that is defined in the cost/rate matrix.
Otherwise, enter the billing rate that is associated with the transaction. If multi-currency is not enabled, the default is the system currency.
If multicurrency is enabled, then transaction rate defaults to the active currency that is listed first alphabetically.
For example, if ADP and INR are active - ADP becomes the default currency. Select another currency as needed. - Chargeable:
Indicates if this transaction represents costs that should be charged internally to departments.
If this option is not selected, this transaction will not be available for billing or invoicing.

Delete Transactions If transactions have not been posted to WIP, you can delete an entire set of transactions that are associated with a transaction entry, or can delete individual transactions from a selected voucher header. You can also delete transactions from the Financial Management menu.
Follow these steps: To delete a voucher header
1. Filter for voucher headers you want to delete.
2. Select the check box next to each voucher header.
3. Click Delete. The voucher header and their associated transactions are deleted.
To delete a transaction
1. Filter for voucher headers.
2. Select the Entry Number link to view a list of transactions for the selected voucher header. The entry page appears.
3. Select the check box next to each transaction.
4. Click Delete. The selected transaction is deleted.
Manage Work-in-Progress (WIP) Transactions Work-in-progress transactions enable you to adjust and review transactions before they get invoiced. Manage your WIP transactions by posting them, adjusting them as needed, and approving or rejecting them.
Post Transactions to Work-in-Progress Transactions available for posting to WIP are not automatically displayed. You must first search for the transactions you want to post to WIP.
Two methods of WIP posting are available: - Full Post: This method lets you select all accumulated transactions in a specified date range. To minimize
performance issues, perform a full post only when the total number of transactions is less than 5,000. - Selective Post: This method lets you filter transactions. During a selective post, you can limit the selection of
transactions that are based on location, client, investment, resource, and transaction type. Selective posts are useful when you want to post a selected batch of transactions, or ones that were not entered in time for a regularly scheduled post to WIP.
1. Open Home, and from Financial Management, click Post to WIP.
2. Search for the transactions you want to post using the following criteria:
a. From Date and To Date: Defines a specific date range for posting transactions. To post transactions within the specified date range, use the date picker.
> [!note]
> If you do not enter any dates (start date or end date), all available transactions from any past date are pulled up to the current (today's) date.

So, to post any available transactions with a future date you must specify an end date. b. Locations: Defines financial locations for associated transactions.
You can only select locations with pending transactions. c. Client Codes: Defines client codes for associated transactions. d. Projects:
Indicates the projects to which transactions are associated. e. Resources: Indicates the resources to which transactions are associated.

f. Entry Type: Indicates the transaction entry type. Use this type to post transactions that are based on the transaction entry. Values: All:

Indicates that transactions are posted regardless of entry type. Imported: Indicates posted transactions that were imported from an external accounting system. Clarity:
Indicates that posted transactions originated in Classic PPM. Voucher Expense: Indicates that posted transactions were entered as Voucher-Expense. Voucher Other:
Indicates that posted transactions were entered as Voucher-Other.
g. Incurred By: Indicates the resource that incurred the transaction. h. Labor: Indicates if labor transactions are posted. Select the check box to post labor transactions. Default:
Selected i. Material: Indicates if all material transactions are included in the post. Select this check box to include all material
transactions in the post. Default: Selected j. Equipment: Indicates if all equipment transactions are included in the post. Select this check box to include all
equipment transactions in the post. Default: Selected. k. Expense: Indicates if all expense transactions are included in the post. Select the check box to include all expense
3. Click Apply to filter transactions based on the entered criteria.
4. All transactions that match the criteria are grouped into a transaction account, such as All for a full post, or Location
for a selected post that is based on location. The total number of entries is displayed. By default, the check box next to this account is selected. 5. Do one of the following: a.

Click Post to send the transactions to the WIP stage. b. Click Recalculate and Post to recalculate the rates and costs if the foreign exchange rates are modified. The
Recalculate and Post button appears on the Post to WIP page only when multi-currency is enabled.
Work-in-Progress (WIP) Adjustments
Transactions posted to WIP are available for WIP adjustments and department invoicing. With WIP adjustments, you can modify and correct posted WIP transactions. You can update, reverse, or transfer posted WIP transactions.
A WIP adjustment ensures that the correct amount is recorded and eligible for chargebacks. Posted WIP transactions must meet the following criteria to adjust them:
1. Has been posted to WIP
2. Previous adjustments have been approved or rejected
3. Is not currently in the WIP adjustment process
4. Has not been invoiced
5. Has not been reversed
6. Has not been closed
> [!note]
> If any of these criteria are not met for a transaction, it cannot be adjusted.
When you enter a WIP adjustment, a transaction is added that references, not replaces, the original transaction. This adjustment transaction is placed on hold and is made unavailable until it is approved or rejected.
WIP adjustments are available for reporting before WIP approval. WIP adjustments are processed in the natural currency amount.

If multi-currency is enabled, each time a WIP adjustment is entered, the currency amounts are updated with the exchange rates based on the original transaction date.
You can enter negative values in a WIP adjustment.
Modify Posted Work-in-Progress (WIP) Transactions
You can edit or adjust a posted WIP transaction. For example, if you post a transaction into WIP with an incorrect cost type, you can correct the transaction by locating the associated task and changing the cost type. After that, you can open

and save the transaction without making any changes. Doing so displays it in the Approve WIP Adjustment list. Once you approve, the transaction is associated with the correct cost type.
1. Open Home, and from Financial Management, click Create WIP Adjustment.
2. Search for posted WIP transactions by specifying a date range in the From Date and To Date fields.
3. Click Filter. Transactions that match the criteria appear.
4. Click the Transaction Date link to edit transaction information.
5. Modify the Calculate New Rates field. This field indicates if the rates are recalculated. Select this check box to
recalculate the rates. This field always appears regardless of the filter selections you make. 6. Save the changes. The WIP adjustment is on hold until it is approved or rejected. If multi-currency is enabled and
the rate currency code is modified, the currency amounts associated with the transaction are recalculated with the modified currency code. 7. Approve or reject the reversed WIP adjustment.
Reverse Posted Work-in-Progress (WIP) Transactions A reversal cancels the original posted transaction before it is billed. If multi-currency is enabled, the currency amounts on the WIP reversal are equal to those on the original transaction.
Follow these steps: 1. Filter for the posted WIP transaction by specifying a date range in the From Date and To Date fields. Transactions that
match the criteria appear. 2. Select each transaction that you want to reverse, and click Reverse. The transaction is ready for WIP approval.
Transfer Work-in-Progress (WIP) Transactions If the cost/rate matrix has changed and if you want to recalculate the financial transactions to retrieve a new rate, make a WIP Adjustment by creating a WIP transfer.

Then, select the Calculate New Rates check box. Transactions use the current rate in the cost/rate matrix that is associated with the investment.
> [!note]
> Any changes to the resource financial properties are not updated on WIP adjustments or WIP transfers. Fields like Location, Department, and Resource Class are only set for the WIP transaction at the time you create a transaction.
For a transaction to have updated resource financial properties, make a direct WIP adjustment on the existing transaction to zero. Next, create a transaction for the same date and quantity. The new transaction includes the current resource financial properties.
A transfer allows you to make batch WIP adjustments on selected transactions or to batch transfer transactions from one investment to another.
To enable a transfer, you must filter transactions based on the transaction details you want to adjust (or transfer). In addition to a date range, filter on at least one of the following transaction details:
1. Investment ID
2. Task
3. Charge Code
4. Resource ID
5. Transaction Class
6. Input Type Code

Follow these steps:
1. Filter for the posted WIP transaction. Transactions that match the criteria display in the list.
2. Select the check box next to each transaction you want to adjust or transfer, and click Transfer.
3. In the Transfer From section, view the following information:
a. Project: Displays the project for which the transaction was performed. b. Task: Displays the task that is associated with the transaction. c. Charge Code:

Displays the charge code that is associated with the transaction. d. Input Type Code: Displays the input type code that is associated with the transaction. e. Resource ID:
Displays the resource against which the transaction is posted. f. Transaction Class: Displays the transaction class for the transaction. The information that is displayed in this
section depends on the filter selection you made. 4. Complete the following fields as needed:
a. Override Date: Identifies a new date for the transaction. This field always appears regardless of the filter selections you make. Use the date picker to select a date.
b. Project: Identifies the investment to which the transaction is transferred. This field is displayed only if Investment ID is selected as a transaction detail in the filter.
c. Task: Identifies the task to which the transaction is transferred. This field is displayed if Task or Investment ID is selected as a transaction detail in the filter.
d. Charge Code: Identifies the charge code to which the transaction is transferred. This field is displayed only if Charge Code is selected as a transaction detail in the filter.
e. Input Type Code: Identifies the input type code to which the transaction is transferred. This field is displayed only if Input Type Code is selected as a transaction detail in the filter.
f. Resource ID: Identifies the resource to which the transaction is transferred. This field is displayed only if Resource ID is selected as a transaction detail in the filter.
g. Calculate New Rates: Indicates if the rates are recalculated. Select this check box to recalculate the rates. This field always appears regardless of the filter selections you make.
h. Transaction Class: Identifies the transaction class to which the transaction is transferred. This field is displayed only if Transaction Class is selected as a transaction detail in the filter.
5. Save the changes. The transfer status page appears. If the transfer was not successful, the reason for the failure is displayed.
6. Click Continue to return to the previous page.
Approve or Reject Work-in-Progress (WIP) Adjustments
All WIP adjustments must be reviewed and either approved or rejected.
Follow these steps:
1. Click Home, Financial Management, Approve WIP Adjustment.
2. Filter for the specific WIP adjustments as needed to review.
3. Select each transaction to approve or reject the transactions without reviewing the details.
4. Click Approve or Reject.
Approve or Reject Work-in-Progress Adjustments with Reviews
The WIP adjustment details page enables you to compare the adjusted transaction with the adjustment transaction. Often a second-level reviewer is involved in determining if a WIP adjustment is accurate.
Follow these steps:
1. Filter for the specific WIP adjustments as needed to review.
2. Click the Transaction Date link to view the details of the selected WIP adjustment.

## Manage Unposted Transactions

The **Unposted Transactions** grid provides visibility into all transactions in an unposted state, originating from any source — Timesheets, XOG/API import, or manual entry. You can create additional manual transactions, edit or delete imported and manual transactions, and use the Copy function to quickly duplicate entries.

> [!IMPORTANT]
> Timesheet transactions **cannot** be edited or deleted from the Unposted Transactions grid. Any updates to timesheet-originated transactions must go through the Timesheet adjustments flow.

### Create an Unposted Transaction

Follow these steps:

1. Open **Transactions** in Clarity
2. Click the **Unposted Transactions** tab
3. Click **+** to add an unposted transaction. Ensure that you select mandatory fields using the column picker
4. Enter the transaction details in the fields and press **Enter**
5. To add a row below an existing row, right-click a cell in that row and select **Insert Row Below**

> [!NOTE]
> **Assigning Posted Transactions to a Team:** You can enter transactions for a team even if they are not assigned to a task. After creating the unposted transaction:
> 1. Post the unposted transaction to WIP
> 2. Execute the **Import Financial Actuals** job
> Clarity will then populate the new row in the Assignment of Investment, assigning the task to the team as specified.

### Copy an Unposted Transaction

You can copy an unposted transaction from the context-sensitive menu.

1. Open **Transactions** in Clarity
2. Click the **Unposted Transactions** tab
3. Right-click a cell on the row and select **Copy** — the row is duplicated

### Edit an Unposted Transaction

You can edit an unposted transaction in two ways:
1. Using the **Details Panel**
2. Double-clicking a cell in a row and editing the value

**Bulk edit multiple unposted transactions:**

1. Open **Transactions** in Clarity
2. Click the **Unposted Transactions** tab
3. Select the unposted transactions you want to update
4. Click the **Edit** button
5. In the **Bulk Edit** window, make the relevant changes
6. Click **Save**

### Delete an Unposted Transaction

**Delete a single unposted transaction:**

1. Open **Transactions** in Clarity
2. Click the **Unposted Transactions** tab
3. Right-click a cell on the row and select **Delete Row**

**Delete multiple unposted transactions:**

1. Open **Transactions** in Clarity
2. Click the **Unposted Transactions** tab
3. Select the transactions and click **Delete**
4. Confirm the deletion when prompted

## Related
- [[Transactions and WIP]]
- [[_MOC Financials]]

%%Source: p2196-2203%%

