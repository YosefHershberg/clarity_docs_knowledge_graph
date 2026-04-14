---
title: XOG Services Object API
tags:
  - dev
aliases:
  - Object API
canonical: true
audience: dev
domain: development
---
# XOG Services: Object API

The structure for each XOG object is defined in its corresponding XSD schema. One general schema applies to all read requests; individual schemas apply to each object's read response and write request.

For a complete list of available XOG objects, see [[Object Reference]].

---

## Filter Criteria

XOG read requests support the following filter criteria:

| Criteria | Example |
|----------|---------|
| `EQUALS` | `<Filter name="projectID" criteria="EQUALS">test</Filter>` |
| `OR` | `<Filter name="projectID" criteria="OR">project1,project2</Filter>` |
| `AFTER` | `<Filter name="projectID" criteria="AFTER">A</Filter>` |
| `BEFORE` | `<Filter name="projectID" criteria="BEFORE">Z</Filter>` |
| `BETWEEN` | `<Filter name="start" criteria="BETWEEN">2007-01-07,2009-01-15</Filter>` |

> [!WARNING]
> Do not use spaces around comma-separated entries for `OR` and `BETWEEN` filters.

### Values to Pass

| Field Type | Value Type |
|------------|-----------|
| Lookup | `lookup_code`, `lookup_enum`, or lookup ID — depends on the lookup configuration. |
| Custom Boolean field | `1` or `0` |

---

## XOG Object Types

The Object API includes two groups of XOG objects:

- **Standard stock objects** — Actual objects in the XOG. Communicate with them by reading and writing data using a valid interface.
- **Custom objects and add-ins** — Objects with unique schemas different from the standard stock schema. Create custom objects in Studio before invoking them through the XOG. Add-in schemas allow reading and writing Studio components such as objects, pages, and portlets.

---

## ActionObject Element

All read and write XOG objects use an `<ActionObject>` element to define the action (read or write) and the target object.

For example, `<ReadProject>` means: action = read, object = Project.

The `<ActionObject>` element wraps the `NikuDataBus` header. The namespace `http://www.niku.com/xog/Object` must be localized in your request file using the `obj` prefix.

**Structure example:**

```xml
<obj:ReadProject xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus>
    <Header/>
    <Query/>
  </NikuDataBus>
</obj:ReadProject>
```

---

## Read Standard Stock Objects

Read object requests extract specific records from Classic PPM.

### Example XML Read Request

```xml
<obj:ReadUser xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
    <Header version="12.0.0.5028" externalSource="NIKU"/>
    <Query>
      <Filter name="userName" criteria="EQUALS">admin</Filter>
    </Query>
  </NikuDataBus>
</obj:ReadUser>
```

### Example XML Read Response

```xml
<ReadUserResponse xmlns="http://www.niku.com/xog/Object">
  <NikuDataBus xsi:noNamespaceSchemaLocation="../xsd/nikuxog_user.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Header externalSource="NIKU" version="12.0.0.5028"/>
    <Users>
      <User externalId=" " userLanguage="English" userLocale="en_US"
        userName="admin" userStatus="ACTIVE" userTimezone="Europe/London" userType="INTERNAL">
        <PersonalInformation emailAddress="test@ca.com" firstName="ca" lastName="Administrator"/>
        <Resource resourceId="admin"/>
        <OBSAssocs>
          <OBSAssoc id="loc" name="Location" unitPath="/USA"/>
        </OBSAssocs>
        <Groups>
          <Group id="ApplAdminRl"/>
        </Groups>
      </User>
    </Users>
    <XOGOutput>
      <Status state="SUCCESS"/>
      <Statistics failureRecords="0" insertedRecords="0" totalNumberOfRecords="1" updatedRecords="0"/>
    </XOGOutput>
  </NikuDataBus>
</ReadUserResponse>
```

---

## Write Standard Stock Objects

Write object requests insert and update records. The unique record identifier varies by object (e.g., `userName` for users).

### Example XML Write Request

```xml
<obj:WriteUser xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xsi:noNamespaceSchemaLocation="../xsd/nikuxog_user.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Header externalSource="NIKU" version="12.0.0.5028"/>
    <Users>
      <User externalId=" " userLanguage="English" userLocale="en_US"
        userName="admin" userStatus="ACTIVE" userTimezone="Europe/London">
        <PersonalInformation emailAddress="admin@ca.com"/>
      </User>
    </Users>
  </NikuDataBus>
</obj:WriteUser>
```

### Example XML Write Response

```xml
<WriteUserResponse xmlns="http://www.niku.com/xog/Object">
  <XOGOutput xsi:noNamespaceSchemaLocation="../xsd/status.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Object type="user"/>
    <Status state="SUCCESS"/>
    <Statistics failureRecords="0" insertedRecords="0" totalNumberOfRecords="1" updatedRecords="1"/>
    <Records>
      <Record>
        <KeyInformation>
          <column name="ALL">ALL RECORDS</column>
        </KeyInformation>
        <ErrorInformation>
          <Severity>WARNING</Severity>
          <Description>New Users Password will be Defaulted to Value ca2000</Description>
        </ErrorInformation>
      </Record>
    </Records>
  </XOGOutput>
</WriteUserResponse>
```

---

## Partitioning and Standard Stock Objects

The read object response includes partition view information for each object instance. You can also specify a partition view in write requests.

If you do not specify a partition in your write request, all created instances are automatically assigned to the default system partition `NIKU.ROOT`.

Before specifying a partition view, create a partition model and associate it with your objects in Studio. See [[Partitions]] for more information.

### Example Partition XML

```xml
<obj:WriteProject xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xsi:noNamespaceSchemaLocation="../xsd/nikuxog_project.xsd"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <Header externalSource="NIKU" version="8.0"/>
    <Projects>
      <Project>
        <!-- ... project attributes ... -->
        <CustomInformation>
          <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
        </CustomInformation>
      </Project>
    </Projects>
  </NikuDataBus>
</obj:WriteProject>
```

---

## Read and Write Custom Object Instances

The `CustomObjectInstances` service provides XOG access to instances of custom objects. Instances represent data held within custom objects, not the object definitions themselves.

### Read CustomObjectInstances

The read request uses `nikuxog_read.xsd` and the `<CustomObjectInstanceQuery>` element.

Filter attributes:
- `objectCode` — Custom object ID as defined in Studio.
- `instanceCode` — Custom object instance ID as defined in Studio.

**Example XML Read Request:**

```xml
<obj:ReadCustomObjectInstance xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
    <Header version="12.0.0.5028" externalSource="NIKU"/>
    <CustomObjectInstanceQuery>
      <Filter name="objectCode" criteria="EQUALS">training_modules</Filter>
      <Filter name="instanceCode" criteria="EQUALS">Business Ethics</Filter>
    </CustomObjectInstanceQuery>
  </NikuDataBus>
</obj:ReadCustomObjectInstance>
```

### Write CustomObjectInstances

The write request is defined by the `nikuxog_customObjectInstance.xsd` schema.

**Example XML Write Request:**

```xml
<obj:WriteCustomObjectInstance xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="../xsd/nikuxog_customObjectInstance.xsd">
    <Header externalSource="NIKU" version="12.0.0.5028"/>
    <customObjectInstances objectCode="movies">
      <instance instanceCode="Star Wars" objectCode="movies11">
        <CustomInformation>
          <ColumnValue name="category">Science Fiction</ColumnValue>
          <ColumnValue name="code">Star Wars</ColumnValue>
          <ColumnValue name="name">Star Wars</ColumnValue>
          <ColumnValue name="partition_code">US</ColumnValue>
        </CustomInformation>
        <OBSAssocs/>
      </instance>
    </customObjectInstances>
  </NikuDataBus>
</obj:WriteCustomObjectInstance>
```

### assignInstanceRights Flag

When a user creates a custom object instance, Clarity normally adds three creator instance rights to `CMN_SEC_ASSGND_OBJ_PERM`. The `assignInstanceRights` flag prevents this when creating instances via XOG.

- **Default:** `true` (rights are assigned)
- **Set to `false`** to avoid unnecessary records:

```xml
<instance instanceCode="ABC" objectCode="manufacturer" assignInstanceRights="false">
```

---

## ContentPack Service

The `ContentPack` service provides XOG access to Studio components: objects, object views, NSQL queries, portlets, process definitions, report definitions, lookups, and portlet pages.

### Read Content Pack Objects

The read request uses the `nikuxog_read.xsd` schema. Query types are cumulative — you can query for a page and a separate query for a portlet not on that page.

**Supported query types:**
- `JobQuery`, `LookupQuery`, `MenuQuery`, `PageQuery`, `PartitionModelQuery`, `PortletQuery`, `ProcessQuery`, `QueryQuery`, `ViewQuery`

**Example — Read views for a custom object:**

```xml
<obj:ReadContentPack xmlns:obj="http://www.niku.com/xog/Object">
  <NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="../xsd/nikuxog_read.xsd">
    <Header version="12.0.0.5028" externalSource="NIKU"/>
    <ViewQuery>
      <Filter name="code" criteria="EQUALS">property</Filter>
      <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter>
    </ViewQuery>
    <ViewQuery>
      <Filter name="code" criteria="EQUALS">list</Filter>
      <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter>
    </ViewQuery>
  </NikuDataBus>
</obj:ReadContentPack>
```

### Read Content Pack Objects with Partitioning

To read specific partitioned views, include the `partition_code` filter condition. If `partition_code` is not specified, views for all partitions are exported.

```xml
<ViewQuery>
  <Filter name="code" criteria="EQUALS">property</Filter>
  <Filter name="object_code" criteria="EQUALS">myObject_v1</Filter>
  <Filter name="partition_code" criteria="EQUALS">ABC</Filter>
</ViewQuery>
```

### Export Content Types Without Dependencies

Use the `singleContentType` and `no_dependencies` arguments for small, incremental content updates.

> [!WARNING]
> These arguments should only be used for small, incremental updates. The user must have a thorough understanding of content data on both source and target systems.

- **`singleContentType`** — Exports one content type. Supported values: `job_definition`, `lookup`, `menu`, `object`, `page`, `portlet`, `process`, `query`.
- **`no_dependencies`** — When `true`, exports incremental changes without dependencies. Default: `false`.

**Example — Export a portlet without dependencies:**

```xml
<Header version="12.0.0.5028" action="read" objectType="contentPack" externalSource="NIKU">
  <args name="singleContentType" value="portlet"/>
  <args name="no_dependencies" value="true"/>
</Header>
<PortletQuery>
  <Filter name="code" criteria="EQUALS">balance</Filter>
</PortletQuery>
```

> [!TIP]
> You can also export portlets directly from Studio using the **Export** button on the Portlets list page. Output is packaged as individual XML files in a zip, with basic data and no dependencies.

---

## Autonumbering and Custom Attributes

The `overrideAutoNumbering` header argument controls whether XOG source content overrides autonumbering on the target system. This applies to custom attributes of custom objects.

| Flag Value | Behavior |
|------------|----------|
| `true` (default) | XOG content from the source is applied to the target. Provide a code value. |
| `false` | The autonumbering scheme defined on the target is applied. Use `-1` as the code value. |

### Scenario 1: Master Object, overrideAutoNumbering = true (autonumbering disabled)

```xml
<Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
  <args name="overrideAutoNumbering" value="true"/>
</Header>
<customObjectInstances objectCode="custommaster">
  <instance instanceCode="" objectCode="custommaster">
    <CustomInformation>
      <ColumnValue name="code">manual</ColumnValue>  <!-- provide a manual code -->
      <ColumnValue name="name">cm5</ColumnValue>
      <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
    </CustomInformation>
  </instance>
</customObjectInstances>
```

### Scenario 2: Master Object, overrideAutoNumbering = false (autonumbering enabled)

```xml
<Header action="write" externalSource="NIKU" objectType="customObjectInstance" version="13.2.0.472">
  <args name="overrideAutoNumbering" value="false"/>
</Header>
<customObjectInstances objectCode="custommaster">
  <instance instanceCode="" objectCode="custommaster">
    <CustomInformation>
      <ColumnValue name="code">-1</ColumnValue>  <!-- system generates an autonumbered code -->
      <ColumnValue name="name">cm4</ColumnValue>
      <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
    </CustomInformation>
  </instance>
</customObjectInstances>
```

### Scenario 3: Sub-Object, overrideAutoNumbering = true

```xml
<customObjectInstances objectCode="customsub">
  <instance instanceCode="" objectCode="customsub"
    parentInstanceCode="" parentObjectCode="custommaster">
    <CustomInformation>
      <ColumnValue name="code">manual</ColumnValue>
      <ColumnValue name="name">cs15</ColumnValue>
      <ColumnValue name="odf_cncrt_parent_id">5000000</ColumnValue>
      <ColumnValue name="odf_parent_id">5000000</ColumnValue>
      <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
    </CustomInformation>
  </instance>
</customObjectInstances>
```

### Scenario 4: Sub-Object, overrideAutoNumbering = false

```xml
<customObjectInstances objectCode="customsub">
  <instance instanceCode="" objectCode="customsub"
    parentInstanceCode="" parentObjectCode="custommaster">
    <CustomInformation>
      <ColumnValue name="code">-1</ColumnValue>
      <ColumnValue name="name">cs14</ColumnValue>
      <ColumnValue name="odf_cncrt_parent_id">5000000</ColumnValue>
      <ColumnValue name="odf_parent_id">5000000</ColumnValue>
      <ColumnValue name="partition_code">NIKU.ROOT</ColumnValue>
    </CustomInformation>
  </instance>
</customObjectInstances>
```

---

## Import and Export Custom Fiscal Time-Varying Attributes

You can export or import custom fiscal time-varying attributes as part of exporting a standard or custom subobject. When a subobject is exported, the XOG file includes:
- Custom attributes and modified views for the subobject
- Custom attributes and modified views for the master object
- Referenced lookups

If the subobject includes custom fiscal time-varying attributes, the master object export file also includes:
- Fiscal entity
- Fiscal time period
- Department OBS associations

---

## Import and Export UI Themes

You can import and export UI themes through the XOG. The import file is `cmn_ui_themes_write.xml`.

The `default` attribute on the `UITheme` element determines whether an imported theme becomes the system default:
- `default="true"` — The imported theme becomes the system default.
- `default="false"` — The theme is imported but does not replace the current default.

If multiple themes in a single import file have `default="true"`, the last processed theme becomes the default.

**Sample import file structure:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<NikuDataBus xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="../xsd/nikuxog_uitheme.xsd">
  <Header action="write" externalSource="NIKU" objectType="uitheme" version="13.0"/>
  <UIThemes>
    <UITheme active="true" default="false" id="sample_ui_theme">
      <nls description="A sample UI Theme" languageCode="en" name="Sample UI Theme"/>
      <css><![CDATA[ /* CSS content here */ ]]></css>
    </UITheme>
  </UIThemes>
</NikuDataBus>
```

---

## Include New and Delete Buttons

When importing a new custom object via XOG, the **New** and **Delete** buttons are deselected by default — you cannot immediately create instances of the object. To make these buttons available immediately, include the following two lines in the write script:

```xml
<action code="odf.@objectCode@Create"/>
<action code="odf.deleteObjectInstancesConfirm"/>
```

**Example:**

```xml
<list>
  <action code="odf.testCreate"/>
  <action code="odf.deleteObjectInstancesConfirm"/>
</list>
```

---

## Passing XDM Custom Fields

XDM configuration changes are automatically handled by the Object API.

Rules:
- For **Name** and **Values** fields, use names defined in `customFieldsMetadata.xml`.
- For **lookups**, pass the lookup code and dates in `YYYY-MM-DD` format.
- For **checkbox fields**, pass `1` or `0`.

**Example:**

```xml
<CustomInformation>
  <ColumnValue name="CEO_NAME">ceo2</ColumnValue>
  <ColumnValue name="DEFAULTWEBSITE">http://www1</ColumnValue>
  <ColumnValue name="NUM_OF_EMPLOYEES">100</ColumnValue>
  <ColumnValue name="OPPORTUNITY">1</ColumnValue>
</CustomInformation>
```

---

## XOG Services: InvokeAction API

The InvokeAction API is a general-purpose area for XOG administrative actions that fall outside standard data import and export. No corresponding XSD schema exists for this API, so there is no XSD validation.

### InvokeAction API Root Element

**Process** — Schedules or initiates integration processes in real time.

| Element | Required | Description |
|---------|----------|-------------|
| `code` | Yes | Identifies the process ID. Type: String. |
| `request` | No | Root element of the process input document. Type: Any. |

### Example: Process Request

```xml
<Process xmlns="http://www.niku.com/xog/InvokeAction">
  <code>remedy_writeIncident</code>
  <request>
    <incidents>
      <incident
        assignedTo="jstewart"
        categoryCode="telcom"
        estimatedEffort="240"
        estimatedEffortUnit="MINUTES"
        externalId="tc421"
        impactCode="High"
        incidentCode="RMD-TC421"
        priorityCode="Medium"
        reportedBy="rcordry"
        resolutionDate="2005-03-03T12:30:00"
        sourceCode="REMEDY"
        startDate="2005-03-01T08:00:00"
        statusCode="Closed"/>
    </incidents>
  </request>
</Process>
```

---

## Related
- [[_MOC Development]]

%%Source: p4260-4274%%
