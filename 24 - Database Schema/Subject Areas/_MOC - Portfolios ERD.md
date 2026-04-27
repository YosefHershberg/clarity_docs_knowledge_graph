---
title: Portfolios ERD
type: moc
audience: leadership
domain: development
canonical: true
tags:
  - moc
  - dev
  - schema
  - erd/portfolios
---

# Portfolios ERD

Subject area from the Clarity 15.6 ERD set, cross-referenced with the 16.4.1 MSSQL Niku schema dump. ![ERD source](https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_portfolios.png)

> [!note] Source diagram
> https://techdocs.broadcom.com/content/dam/broadcom/techdocs/us/en/assets/docops/ccppmod156/ppm_erd_portfolios.png

## Tables in this subject area

### Tables documented in this vault
- [[INV_INVESTMENTS]] — This table stores the primary attributes for an investment.
- [[PFM_APPLICATIONS]] — This table stores CA Clarity PPM-specific data.
- [[PFM_APPLICATIONS_PLAN]] — This table contains Contains scenario data for applications in the context of a portfolio plan
- [[PFM_ASSETS]] — This table stores CA Clarity PPM-specific data.
- [[PFM_ASSETS_PLAN]] — This table contains scenario data for applications in the context of a portfolio plan.
- [[PFM_ATTR_REGISTRY]] — This table contains all possible portfolio investment attributes.
- [[PFM_BASELINE_DETAILS]] — This table contains copy of baseline details for the investment in the context of a portfolio.
- [[PFM_CA_APPLICATION]]
- [[PFM_CA_APPLICATION_PLAN]]
- [[PFM_CA_ASSET]]
- [[PFM_CA_ASSET_PLAN]]
- [[PFM_CA_FINANCIALS]] — This table contains copy of financials custom attributes.
- [[PFM_CA_IDEA]]
- [[PFM_CA_IDEA_PLAN]]
- [[PFM_CA_INV]]
- [[PFM_CA_INV_PLAN]]
- [[PFM_CA_NPIOFINPROPERTIES]] — This table contains copy of npio financial custom attributes in the context of a portfolio.
- [[PFM_CA_OTHER]]
- [[PFM_CA_OTHER_PLAN]]
- [[PFM_CA_PRODUCT]]
- [[PFM_CA_PRODUCT_PLAN]]
- [[PFM_CA_PROJECT]]
- [[PFM_CA_PROJECT_PLAN]]
- [[PFM_CA_SERVICE]]
- [[PFM_CA_SERVICE_PLAN]]
- [[PFM_CLOB_CURVES]] — This table contains timesliced values for portfolio attributes.
- [[PFM_CONTENT_FILTERS]] — This table contains power filter expressions that define the contents of a portfolio.
- [[PFM_EV_HISTORY]] — This table contains copy of EV data from PRJ_EV_HISTORY.
- [[PFM_FINANCIALS]] — This table contains copy of Financial data from FIN_FINANCIALS (Selected fields only).
- [[PFM_FLAT_HIERARCHIES]] — This table flattens the hierarchy such that is can be queried directly with SQL.
- [[PFM_HIERARCHIES]] — This table is used to capture portfolio hierarchies.
- [[PFM_IDEAS]] — This table contains copy of idea attributes in the context of a portfolio.
- [[PFM_IDEAS_PLAN]] — This table contains plan data for idea attributes in the context of a plan.
- [[PFM_INVESTMENTS]] — This table contains copy of investment attributes in the context of a portfolio.
- [[PFM_INVESTMENTS_PLAN]] — This table contains plan data for idea attributes in the context of a plan.
- [[PFM_INV_CONSTRAINT_SUMS]] — This table holds the computed sums for portfolio investment constraints that show on the waterlines page.
- [[PFM_MNT_PROJECTS]] — This table contains data from PAC_MNT_PROJECTS for investments in the portfolio.
- [[PFM_OTHERS]] — This table contains data from PRJ_OTHERS for investments in the portfolio.
- [[PFM_OTHERS_PLAN]] — This table contains plan data for Other Work investments in the context of a plan.
- [[PFM_PINNED_INVESTMENTS]] — This table contains investments that are to be added to a portfolio.
- [[PFM_PLANS]] — This table contains rows that describe alternative planning criteria.
- [[PFM_PORTFOLIOS]] — This table contain rows that describe portfolios.
- [[PFM_PRODUCTS]] — This table contains the copy of product investments in the context of a portfolio.
- [[PFM_PRODUCTS_PLAN]] — This tables contains the changes to the product in the context of a plan.
- [[PFM_PROJECTS]] — This table contains the copy of project investments in the context of a portfolio.
- [[PFM_PROJECTS_PLAN]] — This table contains the changes to the projects in the context of a plan.
- [[PFM_ROLE_CAPACITY]] — This table contains role capacity target curves.
- [[PFM_ROLE_DEMAND]] — This table contains role demand values.
- [[PFM_ROLE_DEMAND_PLAN]] — This table contains role demand changes in the context of a plan.
- [[PFM_SERVICES]] — This table contains copy of service investments in the context of portfolio.
- [[PFM_SERVICES_PLAN]] — This table contains changes to service investments in the context of a portfolio.
- [[PFM_USER_SELECTED_PLAN]] — This table contains the selected plan for a portfolio user.
- [[PFM_WEIGHTING_ATTRS]] — This table contains numeric weights for
- [[PFM_WEIGHTING_OPTS]] — This table contains weighting options.
- [[PMA_SCENARIO_CONSTRAINTS]] — This table stores the investment's information which is added as a constraint for that scenario.
- [[PMA_SCENARIO_OPT_PARAMS]] — This table stores all the optimization parameters defined for this scenario. These parameters are used to assign a score…
- [[SRM_RESOURCES]] — This table stores the master resources table. A row is created in this table when a new resource is added.

## See also
- [[_MOC - Database Schema]] — top-level schema MOC
- [[_MOC - Subject Areas]] — all 33 ERD subject areas
- [[Conventions and FK Patterns]] — how Clarity FKs work
- [[Joining Recipes]] — common SQL join patterns
