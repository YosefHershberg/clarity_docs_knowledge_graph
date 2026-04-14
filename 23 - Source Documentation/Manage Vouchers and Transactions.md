# Manage Vouchers and Transactions

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[07 - Financial Management/_MOC Financials|Financial Management]]
- Canonical notes:
- [[07 - Financial Management/Transactions and WIP]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Verify Prerequisites (#verify-prerequisites)
- H2: Setup View Options (#setup-view-options)
- H2: Working with Vouchers (#working-with-vouchers)
- H3: Create a Voucher (#create-a-voucher)
- H3: Edit a Voucher (#edit-a-voucher)
- H3: Delete a Voucher (#delete-a-voucher)
- H2: Working with Transactions Entry (#working-with-transactions-entry)
- H3: Create a Transactions Entry (#create-a-transactions-entry)
- H3: Edit a Transactions Entry (#edit-a-transactions-entry)
- H3: Delete a Transactions Entry (#delete-a-transactions-entry)
- H2: Managing Records By Using the Grid Layout (#managing-records-by-using-the-grid-layout)
- H2: Manage Unposted Transactions (#manage-unposted-transactions)
- H3: Introduction (#introduction)
- H3: Create an Unposted Transaction (#create-an-unposted-transaction)
- H3: Copy an Unposted Transaction (#copy-an-unposted-transaction)
- H3: Edit an Unposted Transaction (#edit-an-unposted-transaction)
- H3: Delete an Unposted Transaction (#delete-an-unposted-transaction)
- H3: View Multicurrency Transactions (#view-multicurrency-transactions)
- H2: View Posted Financial Transactions Across Investments (#view-posted-financial-transactions-across-investments)
- H3: Scenario: Comprehensive Investment Portfolio (#scenario-comprehensive-investment-portfolio)
- H3: Verify Prerequisites (#verify-prerequisites)
- H3: Grid Capabilities (#grid-capabilities)

The Transaction workspace in Clarity is designed to streamline the management of all financial transactions--whether labor, material, equipment, expense, imported, manual, unposted, or posted. Through a unified grid-based interface, users can create, edit, delete, and copy vouchers, as well as their underlying transaction entries, and review both unposted and posted actuals across investments.

By leveraging powerful grid capabilities--such as sorting, filtering, grouping, aggregation, conditional formatting, bulk edits, and embedded charting--stakeholders gain real-time visibility into financial activities, ensuring accurate reporting, efficient processing, and transparent decision-making.

At the heart of the workspace are three interrelated grids:

1. **Vouchers and Transaction Entries**: Enter labor, material, equipment, and expense transactions via categorized vouchers; manage entries with row-level and bulk-edit actions.
2. **Unposted Transactions**: Review, add, copy, edit, and delete manual or imported transactions before posting to work-in-progress (WIP).
3. **Posted Transactions Across Investments**: View all posted actuals across projects and investments in a read-only grid, filtered by date range and enhanced with aggregation and visualization controls.

This section contains the following topics:
- Verify Prerequisites
- Setup View Options
- Working with Vouchers
- Working with Transactions Entry
- Managing Records By Using the Grid Layout

## Verify Prerequisites

Ensure that you have the following access rights to use Transactions in Clarity:
- **Transactions - Navigate**: Allows the user to access the Transactions page in Clarity. Type: Global
- **Financial Process - Transaction Entry**: Allows the user to enter transactions (vouchers) in Clarity. Type: Global

## Setup View Options

Follow these steps:

1. Log into Clarity.
2. Navigate to the relevant page and click the relevant layout.
3. In the layout, click **View Options**.
4. **Show Total Row**: Turn on the toggle to show total row. It displays an additional Total row at the top of the grid (just below the header row). By default, the value is set to Off.

The following table shows the different types of aggregation supported for various types of attributes:

| Aggregation | Number, Money, Calculated, Integer | Percent | Date | Boolean | TS |
|------------|----------------------------------|---------|------|---------|-----|
| Sum | Yes | | | | |
| Average | Yes | | | | |
| Count | Yes | Yes | Yes | Yes | Yes |
| Min/Max | Yes | | | | |
| None | Yes | Yes | Yes | Yes | Yes |

5. Select how you want the money and number attributes to be displayed by configuring the **Money Decimal Display** and **Number Decimal Display** options.
6. **Wrap Text**: Turn on the toggle to wrap the text for all attributes on the grid. By default, the value is set to Off.
7. Click **X** to close the View Options panel.

## Working with Vouchers

You must create a voucher to enter transactions. The following voucher types are used to categorize transactions by resource type for transaction entry:
- **Voucher Other**: Allows transactions on labor, materials, and equipment resource types.
- **Voucher Expense**: Allows transactions for the expense resource type.

You can perform the following actions in the Financial Vouchers:
- Create a Voucher
- Edit a Voucher
- Delete a Voucher

### Create a Voucher

Follow these steps:

1. Open **Transactions** in Clarity.
2. In Transactions, click **+** to add a new voucher. Ensure that you select the mandatory fields using the column picker.
3. Enter the voucher details in the fields and press **Enter**.
4. To add a row below an existing row, right-click a cell in that row and select **Insert Row Below**. A new row gets added to the grid.

### Edit a Voucher

You can edit a voucher:

1. Using the **Details Panel**
2. Double-click a cell in a row and edit the values

You can edit multiple vouchers on the Grid layout using the **Bulk Edit** capability.

Follow these steps:

1. Open **Transactions** in Clarity.
2. Select the vouchers you want to update.
3. Select the **Edit** button.
4. In the **Bulk Edit** window, make the relevant changes to multiple vouchers.
5. Click **Save** to confirm your changes.

> [!IMPORTANT]
> You cannot modify the **Entry Type** field for the Voucher.

### Delete a Voucher

You can delete a voucher from the context-sensitive menu. You can also delete multiple vouchers on the grid using the bulk delete capability.

**Delete a voucher:**

1. Open **Transactions** in Clarity.
2. Right-click a cell on a row and select **Delete Row**. The row will be deleted.

**Delete multiple vouchers:**

1. Open **Transactions** in Clarity.
2. Select the vouchers and click **Delete**. A confirmation pop-up window appears, stating "Are you sure you want to Delete 'n' items?".
3. Click **Delete**.

## Working with Transactions Entry

After creating a voucher, you can create the transaction entries for the voucher. You can perform the following actions in Financial Transactions:
- Create a Transactions Entry
- Edit a Transactions Entry
- Delete a Transactions Entry

### Create a Transactions Entry

Follow these steps:

1. Open **Transactions** in Clarity.
2. Select a Voucher you want to add the transaction entries.
3. Click **Details**, **Transaction Entry**.
4. In Transaction Entry, click **+** to add a new transaction. Ensure that you select the mandatory fields using the column picker.
5. Enter the Transaction details in the fields and press **Enter**.
6. To add a row below an existing row, right-click a cell in that row and select **Insert Row Below**. A new row gets added to the grid.

> [!NOTE]
> Clarity auto-populates certain attributes in the grid to save time for the user.

### Edit a Transactions Entry

You can edit a transaction entry:

1. Using the **Details Panel**
2. Double-click a cell in a row and edit the values

You can edit multiple transaction entries on the Grid layout using the **Bulk Edit** capability.

Follow these steps:

1. Open **Transactions** in Clarity.
2. Select a Voucher you want to edit the transaction entries.
3. Click **Details**, **Transaction Entry**.
4. Select the transaction entries you want to update.
5. Select the **Edit** button.
6. In the **Bulk Edit** window, make the relevant changes to multiple transaction entries.
7. Click **Save** to confirm your changes.

### Delete a Transactions Entry

You can delete a transaction entry from the context-sensitive menu. You can also delete the multiple transaction entries on the grid using the bulk delete capability.

**Delete a transactions entry:**

1. Open **Transactions** in Clarity.
2. Right-click a cell on a row and select **Delete Row**. The row will be deleted.

**Delete multiple transactions entries:**

1. Open **Transactions** in Clarity.
2. Select the vouchers and click **Delete**. A confirmation pop-up window appears, stating "Are you sure you want to Delete 'n' items?".
3. Click **Delete**.

## Managing Records By Using the Grid Layout

The Clarity Grid is a dynamic grid that allows you to interact with records and perform the following actions:
- Edit Data in the grid by using the right-click option. You can also pin, resize, reorder, and reset columns to personalize each grid.
- Format a particular cell or row in a grid to help you analyze your data quickly. Use the **Conditional Formatting** dialog to create rules determining the colors and format of various cells or rows in the grid.
- Use the **Column Panel** to show or hide columns on the grid.
- Mark various object and sub-object instances as your favorite by associating a star against them.
- Use the **+** or **-** option to shift the values in the date field.
- Use the **Drag Functionality** to populate data.
- Drag up to three column headers to use the **Group By** capability.
- Use the out-of-the-box charting experience directly embedded within Clarity.
- Use the **Bulk Delete** capability in the Common Grid to delete multiple records.
- Export the common grid data to a CSV file (up to 250,000 rows).
- Use the **Search** bar to filter values based on the name or ID.
- Use **Filters** to quickly identify records that match your selection criterion.
- Use the **Details Panel**, available as a two-column layout, to edit fields.
- Review and summarize the health of your business by using configurable visual widgets.
- Save and modify multiple views and share them with other users.

> [!NOTE]
> To learn more about the grid layout and associated capabilities, see:
> - Clarity Grids
> - Conditional Formatting
> - Widgets
> - Details Panel
> - Saved Views
> - Filters

## Manage Unposted Transactions

### Introduction

The Unposted Transactions grid helps users to view all transactions in an unposted state originating from any source like Timesheets, XOG/API Import, or Manual Entry.

In addition to viewing all the transactions, you can create additional Manual transactions and edit or delete Imported and Manual transactions directly from this grid. You can also use the Copy functionality to quickly create manual transactions.

> [!IMPORTANT]
> Timesheet transactions can neither be edited nor deleted from the Unposted Transactions grid. Any updates to those should happen through the Timesheet adjustments flow.

This page covers the following topics:
- Setup View Options
- Managing Records By Using the Grid Layout
- Create an Unposted Transaction
- Copy an Unposted Transaction
- Edit an Unposted Transaction
- Delete an Unposted Transaction
- View Multicurrency Transactions

### Create an Unposted Transaction

Follow these steps:

1. Open **Transactions** in Clarity.
2. Click the **Unposted Transactions** tab.
3. Click **+** to add an unposted transaction. Ensure that you select the mandatory fields using the column picker.
4. Enter the unposted transaction details in the fields and press **Enter**.
5. To add a row below an existing row, right-click a cell in that row and select **Insert Row Below**. A new row gets added to the grid.

> [!NOTE]
> **Use the Team attribute: Assign Posted Transactions to Team in Assignments**
> You can enter transactions for a team even if they are not assigned to a task, directly from the Unposted Transactions grid. After creating the unposted transaction in the grid:
> - Post the unposted transaction to WIP.
> - Execute the **Import Financial Actuals** job.
> After executing the job, Clarity will populate the new row with details in the Assignment of Investment, assigning the task to the team as specified in the unposted transaction grid.

### Copy an Unposted Transaction

You can copy an unposted transaction from the context-sensitive menu.

1. Open **Transactions** in Clarity.
2. Click the **Unposted Transactions** tab.
3. Right-click a cell on a row and select **Copy**. The row will be copied.

### Edit an Unposted Transaction

You can edit an Unposted Transaction:

1. Using the **Details Panel**
2. Double-click a cell in a row and edit the values

You can edit multiple unposted transactions on the Grid layout using the **Bulk Edit** capability.

Follow these steps:

1. Open **Transactions** in Clarity.
2. Click the **Unposted Transactions** tab.
3. Select the unposted transactions you want to update.
4. Select the **Edit** button.
5. In the **Bulk Edit** window, make the relevant changes to multiple unposted transactions.
6. Click **Save** to confirm your changes.

### Delete an Unposted Transaction

You can delete an unposted transaction from the context-sensitive menu. You can also delete multiple unposted transactions on the grid using the bulk delete capability.

**Delete an unposted transaction:**

1. Open **Transactions** in Clarity.
2. Click the **Unposted Transactions** tab.
3. Right-click a cell on a row and select **Delete Row**. The row will be deleted.

**Delete multiple unposted transactions:**

1. Open **Transactions** in Clarity.
2. Click the **Unposted Transactions** tab.
3. Select the Unposted Transactions and click **Delete**. A confirmation pop-up window appears, stating "Are you sure you want to Delete 'n' items?".
4. Click **Delete**.

### View Multicurrency Transactions

You can now view multicurrency transactions in the grid. This enhancement allows you to record, view, and analyze financial transactions across multiple currencies with accurate conversion and reporting.

This enhancement includes:
- **Home or Investment Currency**: The currency associated with the investment.
- **Billing Currency**: The currency used for invoicing and billing.
- **Reporting Currency**: The currency used for corporate reporting or consolidation.
- **Transaction Currency**: The currency selected when entering a transaction manually.

#### Scenario: Hedmoral Bank

Hedmoral Bank is a global financial institution with operations in the UK, US, Australia, and Japan. The bank manages investments across multiple regions, with the Home (Investment) Currency set to GBP.

A US-based project team enters a transaction for software licensing costs:
- **Transaction Currency** (entered): USD
- **Billing Currency** (for client invoicing): AUD
- **Reporting Currency** (for consolidation): JPY
- **Home (Investment) Currency**: GBP

**Process:**

1. The team enters the transaction in USD in the Unposted Transactions object.
2. When the transaction is posted, Clarity automatically converts the USD amount using the effective exchange rates configured for the transaction date:
- GBP (Home/Investment Currency)
- AUD (Billing Currency)
- JPY (Reporting Currency)
3. Each currency field in the Posted Transactions grid displays the converted value.

**Benefits for Hedmoral Bank:**
- Project managers can see actual costs in the local currency of the project team (USD) and compare them with billing amounts (AUD).
- Finance analysts can consolidate costs and revenue in JPY for corporate reporting.
- Executives can track investment performance in GBP, the bank's base currency, ensuring consistent financial visibility across regions.
- Reduces manual currency conversions and improves reporting accuracy for global projects.

Follow these steps:

1. Log in to Clarity.
2. Navigate to the relevant page.
3. Configure the required currency fields using **Columns**.
4. View the transactions in different currencies directly in the grid.

## View Posted Financial Transactions Across Investments

In managing a diverse portfolio of investments, ranging from Business Bank Engagement to technology upgrades, viewing all the posted financial transactions (actual transactions) in a consolidated grid offers invaluable insights for effective decision-making, performance evaluation, and financial transparency.

### Scenario: Comprehensive Investment Portfolio

**Users:**

| Name | Role |
|------|------|
| User 01 Susan | Chief Investment Officer (CIO) |
| User 02 Sid | Portfolio Manager |

Susan, the CIO of a financial firm, oversees a varied investment portfolio that includes cutting-edge sectors such as Technology Upgrades (4G), Business Bank Engagement, and Cloud Transformation Initiatives. She recognizes the necessity of closely monitoring the posted financial transactions across all investments.

**Steps:**

1. **Accessing the Transactions Grid**: Sid, a Portfolio Analyst, logs into Clarity and navigates to the Transactions Grid. The grid provides a single interface to view all the posted transactions across investments.
2. **Simplifying Customization**: Sid can customize the view by specifying a specific transaction date. This flexibility allows him to tailor the grid to his analysis needs.
3. **Drilling Down for Details**: By using the filter capability in the grid, Sid can access a detailed view of the transaction. This view includes transaction-specific data, such as Investment Name, Transaction Date, Input Type Code, Charge Code, Cost Type, etc.
4. **Enabling Informed Analysis and Decision-Making**: Susan utilizes the Transactions Grid for quarterly performance reviews.
5. **Providing Transparent Reporting**: Susan compiles insightful reports based on data from the Posted Transactions Grid.

### Verify Prerequisites

Ensure that you have the **Posted Transactions - View All** access right to use Posted Transactions in Clarity. It allows the user to view all projects, ideas, and custom investments posted transactions. Type: Global.

> [!NOTE]
> This access right governs the visibility of:
> - Actual Transactions sub-tab within the Financials module of Investments.
> - Hyperlinking Actual Costs/Units value in Financial Plans, both in Investments and Hierarchies.
> - Records in the Posted Transactions module in Transactions workspace.

> [!IMPORTANT]
> With the introduction of the **Posted Transactions - View All** access right, the **Hide Financials Actual Transactions** option in System Options, which previously managed the visibility of Actual Transactions, has been retired.

### Grid Capabilities

The Posted Transactions tab in the Transactions workspace is a read-only grid that supports most Standard grid capabilities.

> [!NOTE]
> Some of the key points to remember are:
> - The Standard View comes with a required filter on **Transaction Date**, set to filter the transactions for the last 30 days by default.
> - The maximum number of days of data that can be viewed in the grid is limited to 3 months by default, which your administrator can control.
