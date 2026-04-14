---
title: Clarity Studio NSQL Queries
tags:
  - dev
aliases:
  - NSQL Queries
canonical: true
audience: dev
domain: development
---
# Clarity Studio NSQL Queries

Before you create a portlet to extract and display data, write a query that defines the data. Leverage the Classic PPM data model and its primary database tables to build NSQL queries and lookups that extract data. Knowledge of SQL is not required to work in Studio, but some familiarity is helpful.

NSQL queries are **read-only** — they retrieve data but do not change it. When you define an NSQL query, identify the query segments and designate them as metric values, dimensions, dimension properties, or parameters. The same query can be used to produce data for multiple portlets.

> [!NOTE]
> Beginning with Classic PPM 15.3, you can define dynamic lookups against the data warehouse. Beginning with 15.4, you can define NSQL queries for portlets against the data warehouse.

---

## NSQL Syntax

The main NSQL keywords are the same as standard SQL keywords.

### SELECT

The `SELECT` statement retrieves column data from tables. NSQL statements fail with an error if the query does not start with `@SELECT`.

### FROM

The `FROM` clause identifies the required tables.

```sql
SELECT @Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@,
       @Select:DIM_PROP:IMPLIED:PRJ:P.Name:ProjectName@
FROM SRM_PROJECTS P
```

```sql
SELECT @Select:DIM:USER_DEF:IMPLIED:PRJ:SRM_PROJECTS.ID:ProjectID@,
       @Select:DIM_PROP:IMPLIED:PRJ:SRM_Projects.Start:ProjectStart@,
       @Select:DIM:USER_DEF:IMPLIED:RES:R.Unique_Name:ResourceID@,
       @Select:DIM_PROP:IMPLIED:RES:R.Full_Name:ResourceName@
FROM SRM_PROJECTS, SRM_RESOURCES, PRTEAM
```

### WHERE

The `WHERE` statement filters query data. Every NSQL `WHERE` clause must include a `@FILTER@` parameter.

```sql
SELECT @Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@,
       @Select:DIM_PROP:IMPLIED:PRJ:P.Name:ProjectName@
FROM SRM_PROJECTS P
WHERE @FILTER@ AND P.Is_Active = 1
```

### XPATH (XML Parameter) Construct

Use this construct in the `WHERE` clause to retrieve a name-value pair from the page URL into a user-defined portlet:

```
@where:param:xml:string:/data/id/@value@
```

This construct only works with specific portlet instance types (not the General type). The portlet must be placed on an object page so that the object's internal ID appears in the URL.

**Example:** A portlet on the Project Dashboard using the XPATH construct:

```sql
SELECT @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.ID:PID@,
       @SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:P.UNIQUE_NAME:PNAME@,
       @SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):TEAM_COUNT:AGG@
FROM SRM_PROJECTS P, PRTEAM T
WHERE P.ID = @where:param:xml:string:/data/id/@value@
  AND P.ID = T.PRPROJECTID
  AND @FILTER@
GROUP BY P.ID, P.UNIQUE_NAME
HAVING @HAVING_FILTER@
```

### GROUP BY and HAVING

`GROUP BY` combines records with identical values into a single record — typically for aggregate functions. `HAVING` filters grouped data. In NSQL, `HAVING` is required whenever `GROUP BY` with a metric is used. The syntax is `@HAVING_FILTER@`.

```sql
SELECT @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.PROJECT_CODE:ProjID@,
       @SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:P.PROJECT_NAME:ProjName@,
       @select:metric:user_def:implied:P.ACTUAL_HOURS:Actuals:agg@
FROM NBI_PROJECT_CURRENT_FACTS P
WHERE @FILTER@
HAVING @HAVING_FILTER
```

```sql
SELECT @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:C.MANAGER_LAST_NAME:MANAGER@,
       @SELECT:METRIC:USER_DEF:IMPLIED:SUM(C.ACT_HOURS):Actuals:AGG@
FROM NBI_PROJECT_CURRENT_FACTS C
WHERE C.MANAGER_LAST_NAME IS NOT NULL
  AND @FILTER@
GROUP BY C.MANAGER_LAST_NAME
HAVING @HAVING_FILTER@
```

### ORDER BY

Use `ORDER BY` to specify sort requirements. Do not use it on dynamic queries used in lookups — the Browse Window already includes a **Default Sorting Column** field.

---

## User-Defined NSQL Constructs

All parts of the `SELECT` clause must use the special NSQL `@SELECT@` syntax.

### Data Types

| Type | Description |
|------|-------------|
| `IMPLIED` | No explicit type needed; derived from the database. Allowed only in `@SELECT...@` constructs. |
| `MONEY (<currency column>)` | Monetary value. The currency column must also be in the `SELECT` statement. |
| `STRING` | Basic string, cannot be manipulated. |
| `INTEGER` | Whole number with no fraction or decimal. |
| `FLOAT` | Decimal or floating-point number (e.g., `2.375`). |
| `DATE` | Date and time value. Default format: `YYYY-MM-DD HH:MM:SS`. |

### Dimensions

A dimension is a grouping of similar data elements from one or more tables. Define the key value for the dimension first, then additional elements.

**Syntax:**
```
SELECT @SELECT:DIM:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@
```

- Each statement begins and ends with `@`.
- Use `IMPLIED` if the data type can be derived from the database.
- `<Dimension>` is a user-defined name (e.g., `RES`, `PRJ`).
- `<Table.Field>` is the table/alias and field from Classic PPM.
- `<label>` is the user-defined name for the field in the query.

> [!NOTE]
> Portlets based on a query only work as expected when the dimension is comprised of unique values.

**Examples:**
```sql
Select @Select:DIM:USER_DEF:IMPLIED:Project:SRM_PROJECTS.ID:ProjectID@

Select @Select:DIM:USER_DEF:IMPLIED:PRJ:P.ID:ProjectID@

Select @Select:DIM:USER_DEF:IMPLIED:PRJ:SRM_PROJECTS.ID:ProjectID@,
       @Select:DIM:USER_DEF:IMPLIED:RES:R.Unique_Name:ResourceID@
```

### Dimension Properties

After defining the dimension, all other fields are dimension properties. Use the same syntax but replace `DIM` with `DIM_PROP`.

**Syntax:**
```
SELECT @SELECT:DIM_PROP:USER_DEF:IMPLIED:<Dimension>:<Table.Field>:<label>@
```

The `<Dimension>` name must match the dimension column definition.

**Example:**
```sql
SELECT @SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.ID:RSRC_ID@,
       @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@,
       @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:MR.FULL_NAME:MANAGER@
```

### Metrics

A metric column belongs in the `SELECT` section and its values can be totaled in a grid or displayed on a chart.

**Syntax:**
```
@SELECT:METRIC:USER_DEF:IMPLIED:<Table.Field>:<label>:agg@
```

- The keyword `METRIC` must be present — do not use a dimension name.
- `agg` allows the metric to be totaled in a grid.
- The `agg` segment is optional; if the expression uses an aggregate function (`COUNT`, `SUM`, `AVG`), the filter goes into the `HAVING` clause. Otherwise it goes into the `WHERE` clause.

**Examples:**
```sql
@Select:METRIC:USER_DEF:IMPLIED:NBI_PROJECT_CURRENT_FACTS.ACTUAL_HOURS:hrs:agg@
@Select:METRIC:USER_DEF:IMPLIED:PRASSIGNMENT.PRACTSUM/3600:Actuals:agg@
@Select:METRIC:USER_DEF:IMPLIED:Count(*):Project_Count:agg@
@SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):PROJECT_COUNT[:AGG]@
```

### Parameters

Parameters are substitution variables passed into a query. They appear in the `SELECT` list and `WHERE` clause.

**User-supplied parameters:**
```
@SELECT:PARAM:USER_DEF:DATA_TYPE:PARAM_NAME[:ALIAS]@
@WHERE:PARAM:USER_DEF:DATA_TYPE:PARAM_NAME@
```

**Built-in parameters** (values set automatically at runtime):
```
@SELECT:PARAM:PARAM_IDENTIFIER[:ALIAS]@
@WHERE:PARAM:PARAM_IDENTIFIER@
```

Valid `PARAM_IDENTIFIER` values: `USER_ID`, `USER_NAME`, `LANGUAGE`, `LOCALE`

**Example using language parameter:**
```sql
i.xdm_priority = prio.id AND prio.language_code = @where:param:language@
AND i.act_status = s.id AND s.language_code = @where:param:language@
```

---

## Advanced NSQL Construct Examples

NSQL provides special constructs for the following data types:

- OBS
- Calendar Time
- Fiscal Time
- Security

Advanced NSQL constructs are often datamart-specific. The general syntax is:
```
@SELECT:DIM:DATA_MART:construct_type:{entity}@
```

The `DATA_MART` keyword is required. Construct type can be `OBS`, `CALENDAR_TIME`, or `FISCAL_TIME`. For OBS, the entity is `PROJECT` or `RESOURCE`.

**General examples:**
```
@SELECT:DIM:DATA_MART:OBS:PROJECT@
@SELECT:DIM:DATA_MART:CALENDAR_TIME@
@SELECT:DIM:DATA_MART:FISCAL_TIME@
```

### OBS Construct

Use the OBS construct with datamart tables to retrieve data at an OBS unit level.

**Syntax:**
```
@SELECT:DIM:DATA_MART:OBS:{entity}@
@FROM:DIM:DATA_MART:OBS@
@WHERE:DIM:DATA_MART:OBS:datamart_table@
@GROUP_BY:DIM:DATA_MART:OBS@
```

**Example:**
```sql
SELECT @SELECT:DIM:DATA_MART:OBS:PROJECT@,
       @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:P.PROJECT_CODE:ProjID@,
       @select:metric:user_def:implied:Sum(P.ACTUAL_HOURS):Actuals:agg@,
       @select:metric:user_def:IMPLIED:Sum(P.ETC_Hours):ETC:agg@
FROM NBI_PROJECT_CURRENT_FACTS P, @FROM:DIM:DATA_MART:OBS@
WHERE @FILTER@
  AND @WHERE:DIM:DATA_MART:OBS:P@
GROUP BY @GROUP_BY:DIM:DATA_MART:OBS@, P.Project_Code
HAVING @HAVING_FILTER@
```

### Calendar Time Construct

Use with the following datamart time tables: `NBI_PM_PT_FACTS`, `NBI_PM_PROJECT_TIME_SUMMARY`, `NBI_RT_FACTS`, `NBI_RESOURCE_TIME_SUMMARY`.

**Syntax:**
```
@SELECT:DIM:DATA_MART:CALENDAR_TIME@
@FROM:DIM:DATA_MART:CALENDAR_TIME@
@WHERE:DIM:DATA_MART:CALENDAR_TIME:<Datamart TIME Table>@
@GROUP_BY:DIM:DATA_MART:CALENDAR_TIME@
```

**Example:**
```sql
SELECT @SELECT:DIM:DATA_MART:CALENDAR_TIME@,
       @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:T.PROJECT_ID:ProjID@,
       @select:metric:user_def:implied:Sum(T.ACTUAL_HOURS):Actuals:agg@
FROM NBI_PM_PT_FACTS T, @FROM:DIM:DATA_MART:CALENDAR_TIME@
WHERE @FILTER@
  AND @WHERE:DIM:DATA_MART:CALENDAR_TIME:T@
GROUP BY @GROUP_BY:DIM:DATA_MART:CALENDAR_TIME@, T.PROJECT_ID
HAVING @HAVING_FILTER@
```

### Fiscal Time Construct

Use when dealing with fiscal periods.

**Syntax:**
```
@SELECT:DIM:DATA_MART:FISCAL_TIME[:<name>]@
@FROM:DIM:DATA_MART:FISCAL_TIME[:<name>]@
@WHERE:DIM:DATA_MART:FISCAL_TIME:F[:<name>]@
@GROUP_BY:DIM:DATA_MART:FISCAL_TIME[:<name>]@
```

**Example:**
```sql
SELECT @SELECT:DIM:DATA_MART_TEST:FISCAL_TIME@,
       @SELECT:METRIC:USER_DEF:IMPLIED:SUM(P.ACT_BILLING):ACT_BILLING:AGG@,
       @SELECT:METRIC:USER_DEF:IMPLIED:SUM(P.REV_ACT_LABOR):REV_ACT_LABOR:AGG@
FROM NBI_FM_PROJECT_TIME_FACTS P, @FROM:DIM:DATA_MART_TEST:FISCAL_TIME@
WHERE @WHERE:DIM:DATA_MART_TEST:FISCAL_TIME:P@
  AND @FILTER@
GROUP BY @GROUP_BY:DIM:DATA_MART_TEST:FISCAL_TIME@
HAVING @HAVING_FILTER@
```

### Security Construct

**Syntax:**
```
@WHERE:SECURITY:<entity type>:<entity id>@
```

- `<entity type>` is `PROJECT` or `RESOURCE`.
- `<entity id>` is the project or resource ID (e.g., `SRM_PROJECTS.ID` or `NBI_PROJECT_CURRENT_FACTS.Project_ID`).
- Use in the `WHERE` clause to restrict results to records the current user has access to view.

**Security Joins example:**
```
@WHERE:SECURITY:PROJECT:SRM.PROJECTS.ID@
```

---

## Dynamic NSQL Query Lookups

Use NSQL to create lookups that dynamically filter portlet data. These lookups fetch data from the database in real time.

**Example** — dynamic query returning resources with a user account:
```sql
SELECT @SELECT:r.user_id:user_id@,
       @SELECT:r.unique_name:unique_name@,
       @SELECT:r.first_name:first_name@,
       @SELECT:r.last_name:last_name@,
       @SELECT:r.full_name:full_name@
FROM srm_resources r
WHERE r.user_id IS NOT NULL
  AND @FILTER@
```

### BROWSE-ONLY Construct

When a record contains an inactive lookup value, that value does not appear in the lookup field on screen. To retain inactivated values so they remain visible on existing records while showing only active values on new records, use the `@BROWSE-ONLY` construct.

**Syntax:**
```
@BROWSE-ONLY: /* SQL for active results only */ :BROWSE-ONLY@
```

**Example:**
```sql
SELECT ...... FROM .....
WHERE @FILTER@
@BROWSE-ONLY: AND IS_ACTIVE = 1 :BROWSE-ONLY@
```

### Export Configurations and UNIQUE_CODE

If a dynamic lookup links an object to a unique instance of another object, use the internal ID as the hidden key and add `UNIQUE_CODE` to the query select clause. This prevents the XOG from exporting internal primary key IDs that cannot be imported into another environment.

**Without UNIQUE_CODE** (problematic for XOG export):
```sql
SELECT @SELECT:r.id:id@,
       @SELECT:r.full_name:full_name@,
       @SELECT:r.unique_name:unique_name@
FROM srm_resources r
WHERE 1=1 AND @FILTER@
```

**With UNIQUE_CODE** (safe for XOG export):
```sql
SELECT @SELECT:r.id:id@,
       @SELECT:r.full_name:full_name@,
       @SELECT:r.unique_name:unique_name@,
       @SELECT:r.unique_name:unique_code@,
       @SELECT:r.last_name:last_name@,
       @SELECT:r.first_name:first_name@
FROM srm_resources r
WHERE 1=1 AND @FILTER@
```

> [!NOTE]
> The column, function, or expression designated as the unique hidden key cannot exceed 30 characters.

---

## Hierarchical NSQL Queries

Use a hierarchical query to display parent values that expand to reveal grouped child values in a grid portlet.

**Key properties:**
- `hg_has_children` — A dimension property that signals whether a row has children. A non-null value shows the `[+]` expand icon; `NULL` means no children.
- `hg_row_id` — A parameter whose data type must match `hg_has_children`. When a user expands a row, the row's ID is passed in via this parameter.

**Rules:**
- When `hg_row_id` is null, return only top-level rows.
- When `hg_row_id` has a value, return only immediate child rows (not grandchildren).

> [!NOTE]
> Investment Parents and Investment Rollup objects do not support custom time-scaled value (TSV) attributes. Custom TSV values display as zero (0) in the Investment Hierarchy Financial Rollup page. Out-of-the-box stock time-varying attributes (e.g., Actuals for Labor Resources) display correctly.

### Hierarchical Query Filters

Filter values are passed into hierarchical queries like regular queries. Standard hierarchical grids return all ancestor rows when a leaf row matches the filter criteria. For example, filtering on `name=Toronto` in a hierarchy of North America > Canada > Ontario > Toronto returns all four levels.

### Export Construct for Hierarchical Grids

Include the `hg_all_rows` construct in a hierarchical NSQL query to export all child rows to Excel in a flat list.

| `hg_all_rows` Value | Result |
|---------------------|--------|
| `1` | Returns all rows for the export request |
| Any other value (including null) | Returns only the current-level rows (top-level by default, or immediate children if a row is expanded) |

> [!NOTE]
> This construct can have a performance impact.

Typically, `hg_all_rows` requires a `UNION` SQL construct:
- First part returns only current-level rows when `hg_all_rows != 1`.
- Second part returns all rows when `hg_all_rows = 1`.

---

## Create a Simple NSQL Query

Studio provides query templates for the following types:

- Collaboration
- Project
- Productivity
- Resource
- Business Intelligence
- Framework

> [!WARNING]
> If an NSQL query `SELECT` statement includes too many columns or aggregate functions, a system error occurs. The total data for sorting plus aggregates cannot exceed the current database block size.

**Follow these steps:**
1. Open **Administration**, and from **Studio**, click **Queries**.
2. Click **New**.
3. Complete the following fields:
   - **Query Name:** Defines the name of the query.
   - **Query ID:** Unique alphanumeric identifier.
   - **Content Source:** Where the query data originates.
   - **Category:** General area the query reports on.
   - **Description:** Purpose of the query.
4. Click **Save and Continue**. The **NSQL** tab appears.
5. Enter your NSQL statement in the query window.
6. Click **Save and Continue**. The **Attributes** tab appears.
7. Review the data columns. Identify which can be filtered, which are required, and which can be used as lookups.
8. Click **Continue**. The **Linking** tab appears.
9. To define links to another table, click **New** and complete the fields:
   - **Name, Link ID, Description**
   - **Action:** Specifies the destination for the link.
10. Save your changes and click **Return**.

---

## The STRING_LIST NSQL Construct

To offer users multi-select lookup values in a portlet filter, use the `STRING_LIST` construct:

```
@WHERE:PARAM:USER_DEF:STRING_LIST:parameter_id@
```

Add `AND @FILTER@` to the `WHERE` clause as well.

> [!IMPORTANT]
> - **STRING_LIST:** The system automatically adds the condition to the WHERE clause, regardless of placement in the query.
> - **STRING_INLINE_LIST:** The filter stays exactly where you place it in the query, giving precise control of evaluation order.

### Example: STRING_LIST

**Query:**
```sql
SELECT DISTINCT
  @SELECT:DIM:USER_DEF:IMPLIED:PROJECT:inv.id:KEY_ID@,
  @SELECT:DIM_PROP:USER_DEF:IMPLIED:PROJECT:inv.name:PROJECT_NAME@
FROM inv_investments inv
WHERE inv.is_active = 1
  AND @WHERE:SECURITY:PROJECT:inv.ID@
  AND (inv.name IN (@WHERE:PARAM:USER_DEF:STRING_LIST:projnamelist@)
       OR @WHERE:PARAM:USER_DEF:STRING_LIST:projnamelist@ IS NULL)
  AND @FILTER@
```

**Test the query via SOAP:**
```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:quer="http://www.niku.com/xog/Query">
  <soapenv:Header>
    <quer:Auth>
      <quer:SessionID>5250602__1B908028-0359-471A-920B-9207E0E8A900</quer:SessionID>
    </quer:Auth>
  </soapenv:Header>
  <soapenv:Body>
    <quer:Query>
      <quer:Code>string_list_test</quer:Code>
      <quer:Filter>
        <quer:project_name_in>stringlisttest</quer:project_name_in>
      </quer:Filter>
    </quer:Query>
  </soapenv:Body>
</soapenv:Envelope>
```

### Example: STRING_INLINE_LIST

`STRING_INLINE_LIST` can be used in a filter portlet. When associated with a lookup and used on a portlet, the field can be configured as single or multi-select.

**Query:**
```sql
SELECT @SELECT:DIM:USER_DEF:IMPLIED:RESOURCE:R.FULL_NAME:RSRC@,
       @SELECT:DIM_PROP:USER_DEF:IMPLIED:RESOURCE:MR.FULL_NAME:MANAGER@,
       @SELECT:METRIC:USER_DEF:IMPLIED:COUNT(*):PROJECT_COUNT:AGG@
FROM INV_INVESTMENTS I, SRM_RESOURCES R, SRM_RESOURCES MR, CMN_SEC_USERS U
WHERE I.CREATED_BY = U.ID
  AND U.ID = R.USER_ID
  AND R.MANAGER_ID = MR.USER_ID
  AND @WHERE:PARAM:USER_DEF:STRING_INLINE_LIST:MR.UNIQUE_NAME:managers@
  AND @FILTER@
GROUP BY R.FULL_NAME, MR.FULL_NAME
HAVING @HAVING_FILTER@
```

> [!NOTE]
> `INTEGER_INLINE_LIST` and `FLOAT_INLINE_LIST` are also supported and can be associated with corresponding lookup data types.

---

## Row Limits

### Row Limit for Studio NSQL Queries

A row limit governor (`MAX_FETCH_LIMIT` = 50,000) is applied to NSQL query results in grid portlets, chart portlets, and XOG query tags.

The limit applies in two scenarios:

- **Scenario 1:** A single-dimension portlet with an aggregation row — a warning appears when the row limit is exceeded; results up to the limit are shown.
- **Scenario 2:** A multidimensional portlet — a warning appears and no results or aggregation totals are displayed.

Apply filter criteria to reduce the number of returned rows.

### Row Limit for Large Queries with Aggregated Calculations

A row limit also applies to stock and custom object portlets. When aggregation is applied to attributes on a list page, the query ignores pagination and retrieves all rows. If rows exceed 50,000, a memory error can occur. The `MAX_FETCH_LIMIT` value is set in the `CMN_OPTIONS_VAL` table.

> [!TIP]
> To calculate aggregate totals on large datasets, use a report or summary portlet instead of paging through a standard grid portlet.

---

## NSQL Queries Against the Data Warehouse

As a Studio developer, you can design portlet queries that use the data warehouse as their source. The steps for defining NSQL queries are the same for database (Niku) or data warehouse sources — the same constructs, syntax, validation rules, and error messages apply.

> [!NOTE]
> The default security clause (`@security@`) is **not** supported with the data warehouse data source. Manually add security `WHERE` clauses. `DBLINK` is also not permitted in data warehouse NSQL queries.

To switch a query to the data warehouse source:
1. Navigate to **Administration > Studio > Queries**.
2. Open or create a query.
3. Click the **NSQL** tab.
4. In the **Source Database** field, select **Data Warehouse**.

Supported NSQL features for data warehouse queries:

**SELECT clause:**
```
@SELECT:DIM:USER_DEF_IMPLIED:<DimensionName>:<TableName.Field>:<label>@
@SELECT:DIM_PROP:USER_DEF_IMPLIED:<DimensionName>:<TableName.Field>:<label>@
@SELECT:METRIC:USER_DEF:IMPLIED:<TableName.Field>:<label>:agg@
```

**WHERE clause:**
```
@WHERE:PARAM:USER_DEF:<data_type>:<PARAM_NAME>@
@WHERE:PARAM:XML:<data_type>:/data/<filter_option>/@value@
@FILTER@
@HAVING_FILTER@
```
Valid data types: `STRING`, `INTEGER`, `FLOAT`, `DATE`

**Built-in parameters:**
```
@WHERE:PARAM:<param_identifier>@
```
Valid identifiers: `USER_ID`, `USER_UID`, `USER_NAME`, `LANGUAGE`, `LOCALE`

**Hierarchical queries** — `hg_has_children` is supported:
```
@WHERE:PARAM:USER_DEF:STRING:hg_row_id@
```

**Miscellaneous constructs:**
```
@DBUSER@
@NVL@ @SUBSTR@ @SYSDATE@ @UPPER@ @LOWER@ @STDDEV@ @VARIANCE@ @+@ @MINUS@
```

**Security construct for data warehouse** (manual, not via `@security@`):
```sql
AND EXISTS (
  SELECT 1 FROM dwh_inv_security_v
  WHERE user_uid = @WHERE:PARAM:USER_UID@
    AND investment_type_key = 'project'
    AND investment_key = i.investment_key
)
```

---

## NSQL Troubleshooting

**Error: "This query produced duplicate dimensional data. The results shown here may be invalid or incomplete."**

The unique key in the Dimension property contains duplicate values. Verify that the table joins are correct and the dimension key is truly unique.

---

## Related
- [[_MOC Development]]

%%Source: p4111-4128%%
