---
title: Transactions ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/transactions
---

# Transactions ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_transactions.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_transactions.png

## Tables in this subject area

### Tables documented in this vault
- [[FIN_POSTED_TXNS]] — This table is deprecated and should no longer be used.
- [[FIN_POSTED_TXN_VALUES]] — This table is deprecated and should no longer be used.
- [[FIN_TXNS]] — This table stores incident related effort entries from both XOG and timesheets. Processed entries populate the FIN_POSTE…
- [[IMP_TRANSACTIONIMPORT]] — This table stores the transactions that are imported into CA Clarity PPM.
- [[IMP_TRANSACTIONIMPORTERRORS]] — This table stores all the error codes and descriptions for transactions imported into CA Clarity PPM.
- [[PAC_IMP_TRANSIMPORT_HEADER]] — This table is a header record for transactions in IMP_TRANSACTIONIMPORT table. It stores information that is common for …
- [[PPA_POSTINGBATCH]] — This table stores the batch posting of work in process (WIP).
- [[PPA_TRANSCONTROL]] — This table stores pending transactions that are ready to move to the PPA_WIP table.
- [[PPA_TRANSCONTROLAPINFO]] — This table stores supplemental accounts payable (AP) information for transactions that are imported from an AP system.
- [[PPA_TRANSCONTROL_VALUES]] — This table stores multi-currency values for rows in the PPA_TRANSCONTROL table.
- [[PPA_TRANSWIPADJUST]] — This table stores unapproved work in progress (WIP) adjustments.
- [[PPA_TRANSWIPADJUST_VALUES]] — This table stores multi-currency values for unapproved WIP adjustments.
- [[PPA_WIP]] — This table stores all primary transactions (Labor, Materials, Equipment, and Expense).
- [[PPA_WIPAPINFO]] — This table stores supplemental accounts payable (AP) information for transactions imported from an AP system.
- [[PPA_WIP_VALUES]] — This table stores multi-currency values for rows in the PPA_WIP table.
- [[PRCHARGECODE]] — This table stores data on charge codes.
- [[PRTIMEENTRY]] — This table stores data viewed on time sheets (i.e., pending actuals). Each row in this table represents an entry on the …
- [[PRTIMEPERIOD]] — This table stores data on time periods.
- [[PRTIMESHEET]] — This table stores data viewed on timesheets.
- [[PRTYPECODE]] — This table stores the names of type codes.

### Off-screen / referenced tables (not in 16.4.1 dump)
- [[PAC_IMP_ACTUALS_EXPORT]]

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns
