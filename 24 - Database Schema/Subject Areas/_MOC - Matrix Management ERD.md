---
title: Matrix Management ERD
type: moc
audience: finance
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/matrix-management
---

# Matrix Management ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_matrix_management.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_matrix_management.png

## Tables in this subject area

### Tables documented in this vault
- [[COSTPLUS]] — This table stores the cost plus summary.
- [[COSTPLUSRULES]] — This table stores the cost plus rules.
- [[PAC_MNT_MATRIX_PERMISIONS]] — This table stores the users who have permission to edit this matrix. This table is populated when access is restricted.
- [[PPA_LOCMATRIXASSIGNMENTS]] — This table stores the matrix location assignments. It stores information about restricting access to a matrix based on t…
- [[PPA_MATRIX]] — This table stores matrix information.
- [[PPA_MATRIXCOLDEF]] — This table stores the individual matrix column definitions.
- [[PPA_MATRIXVALUES]] — This table stores the matrix values as defined by users for every matrix.
- [[TAXCODE]] — This table stores tax code details used in the matrix.
- [[TAXCODE_METHOD]] — This table stores the association between the tax code and tax methods.
- [[TAX_AUTHORITY]] — This table stores tax authority information.
- [[TAX_METHOD]] — This table stores the tax method information for matrices.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns
