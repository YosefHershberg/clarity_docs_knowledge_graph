---
title: Rally Integration Examples
aliases: [Rally Scenarios, Rally Use Cases, Agile Integration Examples]
tags: [howto, dev, reference]
canonical: true
audience: admin, dev
domain: integrations
---
# Rally Integration Examples

Practical scenarios, configuration walkthroughs, and troubleshooting guidance for the Clarity-Rally integration. For foundational concepts, architecture, and field-level configuration options, see [[Rally Integration]].

## Scenario 1: Portfolio Item Integration (Rally to Clarity)

**Use case:** A product organization funds and tracks a single product initiative in Clarity while Rally teams manage features and user stories.

### Setup steps

1. In Rally, create your API key at `https://rally1.rallydev.com/login/accounts/index.html#/keys` — select **Full Access**.
2. Retrieve the **Workspace ID** by calling `https://rally1.rallydev.com/slm/webservice/v2.0/workspace` and noting the `_refObjectUUID`.
3. Retrieve the **Project ID** and **Owner ID** from the workspace details endpoint.
4. In Clarity Classic PPM, navigate to **Administration > General Settings > Integrations**, click **New**, and enter:
   - **Integration URL:** `https://rally1.rallydev.com`
   - **Integration Instance:** the Workspace ID
   - **Authentication Type:** API Key, then paste the Rally API Key
5. On the **Agile Central** tab, set **Integration Type** to **Portfolio Item**.
6. On the **Integration Policy** tab:
   - Map **Portfolio Item Type (Project)** → `Initiative`
   - Map **Portfolio Item Type (Task)** → `Feature`
   - Set **Create Direction** → `Rally to Clarity`
   - Set **Create and Sync Team** → `Yes` (recommended)
7. Save. The **Rally Integration Policy** view will appear.

### Associate a project and run the first sync

1. Open the Clarity project → **Properties > Settings > Agile Integration**.
2. Select the **Synchronize** checkbox, choose the integration in **Agile System**, set **Integration Type** to **Portfolio Item**.
3. From the **Actions** menu, click **Synchronize Agile Central**.
4. After the first run, an initiative is created in Rally and the **Portfolio Item ID** is populated in Clarity.
5. Navigate to **Properties > Agile Summary** to verify **Last Agile Sync Status** = Successful.
6. Navigate to the **Tasks** tab — Rally features now appear as tasks.

> [!NOTE]
> On the first sync run the initiative is pushed Clarity → Rally. On all subsequent runs, features and stories flow Rally → Clarity.

---

## Scenario 2: Investment Integration (Multi-Initiative Tracking)

**Use case:** A portfolio manager wants to track features from multiple Rally initiatives across different business units from a single Clarity project.

### Key differences from Portfolio Item integration

| Aspect | Portfolio Item | Investment |
|---|---|---|
| Direction | Configurable (Rally→Clarity, Clarity→Rally, Bidirectional) | Always Rally → Clarity |
| Scope | One initiative per project | Multiple initiatives per project |
| Hierarchy levels visible in Clarity | Two (e.g., initiative + feature) | Unlimited (configure per ordinal) |

### Setup steps

1. Complete API key and Workspace ID retrieval as in Scenario 1.
2. Retrieve **Portfolio Item Type Ordinals** from the Rally webservice (`https://rally1.rallydev.com/slm/doc/webservice`):
   - Query: `((Parent.Name = "Portfolio Item") and (Creatable = true))`
   - Note `Ordinal` values — `0` = Feature (lowest), increments upward (Initiative = 1, Epic = 2, etc.)
3. In Clarity, on the **Agile Central** tab set **Integration Type** → **Investment**.
4. On the **Portfolio Item Hierarchy** tab, create one row per hierarchy level:

   | Portfolio Item Type | Ordinal | Create and Sync |
   |---|---|---|
   | Feature | 0 | Yes |
   | Initiative | 1 | Yes |
   | Epic | 2 | No |

5. Save and define the **Agile Integration Owner** (see [[Rally Integration]] — Define the Agile Integration Owner).

### Associate a project and create a Rally investment

1. Open the Clarity project → **Properties > Settings > Agile Integration**.
2. Select **Synchronize**, choose the Investment integration, set **Integration Type** → **Investment**.
3. Navigate to **Properties > Agile Summary > Agile Central Investment** — enter a name in the **Create Agile Central Investment** field.
4. Run the **Create Agile Central Investments** background job.
5. In Rally, associate the new investment to portfolio items and assign teams.
6. Run **Synchronize Agile Central** — features from all linked initiatives now appear as Clarity tasks.

> [!NOTE]
> The Agile Central Investment master object is stored in Classic PPM at **Home > Custom Objects > Agile Central Investments**. Do not manually edit this object — Rally is the system of record.

---

## Scenario 3: Bidirectional Integration

**Use case:** Teams want to create work items in either Clarity or Rally and have them reflected in the other system (Portfolio Item integration type only).

### Configuration

On the **Integration Policy** tab, set **Create Direction** → **Bidirectional**.

### How sync behaves in each direction

**First run:**
- Clarity pushes the project as an initiative to Rally.
- Rally features under the initiative are pulled into Clarity as tasks.

**Subsequent runs:**
- **Rally → Clarity:** New features created in Rally appear as new tasks in Clarity.
- **Clarity → Rally:** Tasks with the **Synchronize** checkbox selected (on **Properties > Agile Summary**) are created as features in Rally.
- Items deleted in one system are **not** deleted in the other — they remain but stop syncing.

> [!WARNING]
> Do not change **Portfolio Item Type Map (Project)** or **Portfolio Item Type Map (Task)** values after the initial sync. Changing either field breaks the Rally connection for that project.

---

## Scenario 4: Linking a Clarity Project to an Existing Rally Portfolio Item

**Use case:** A Rally initiative was already created manually before the integration was configured.

Use XOG to set the project's **Agile External ID** directly:

```xml
<CustomInformation>
  <ColumnValue name="agl_ext_id">39345976308</ColumnValue>
  <ColumnValue name="agl_id">I1</ColumnValue>
  <ColumnValue name="agl_system">rally1</ColumnValue>
  <ColumnValue name="agl_sync">true</ColumnValue>
</CustomInformation>
```

| Field | Description |
|---|---|
| `agl_ext_id` | Object ID of the existing Rally portfolio item |
| `agl_id` | Rally portfolio item ID (e.g., `I1`) |
| `agl_system` | Integration instance ID set in Clarity |
| `agl_sync` | Set `true` to activate synchronization |

After uploading the XOG, run **Synchronize Agile Central** to establish the link.

---

## Scenario 5: Timesheet Entry Inside Rally

**Use case:** Rally users want to log time against Clarity tasks without switching applications.

### Prerequisites checklist

- [ ] Agile add-in installed in Classic PPM
- [ ] REST API enabled: **Administration > General Settings > System Options > REST API Status = Enabled**
- [ ] New User Experience activated: **System Options > Activate New User Experience + Activate Timesheets**
- [ ] Each resource has: **Active** checkbox, **Track Mode = PPM**, **Open for Time Entry** selected, **Timesheet - Navigate** access right
- [ ] Each project resource on the **Team** tab: **Track Mode = PPM**, **Open for Time Entry** selected
- [ ] HTTPS enabled on Clarity (on-premise)

### Configure the Rally Timesheet App

1. In Rally, add the **Timesheet app** to your dashboard.
2. Open **App Settings** and enter:
   - **PPM Host Name** — Clarity server URL (non-SSO) or IdP URL (SSO)
   - **Port (HTTPS)** — Clarity port (non-SSO) or IdP port (SSO)
   - **PPM Host Relative Path (SSO only)** — `/pm/integration.html`

### SSO configuration (SaaS environments)

1. Navigate to **Administration > General Settings > Integrations**, open the integration record.
2. Verify **Integration URL** points to the Rally server.
3. In **Referrer URL**, enter the source URL from where requests originate (your IdP URL).

> [!TIP]
> Contact your SSO team for the custom URL they use to access Clarity in a SaaS environment before configuring the Referrer URL.

---

## Task Date Synchronization Reference

When Rally data is pulled into Clarity, task dates are set using this priority order:

| Priority | Source | Used when |
|---|---|---|
| 1 | Rally **Actual Start / Actual End** | Actual dates exist in Rally |
| 2 | Rally **Planned Start / Planned End** | Actual dates are null |
| 3 | **Project Start / Project Finish** | Both Rally date fields are null |

**Exception:** If the Rally actual start date is later than the Clarity project finish date, project dates are used instead.

**Example outcomes:**

| Example | Rally Act. Start | Rally Act. End | Rally Pln. Start | Rally Pln. End | Task Start | Task Finish |
|---|---|---|---|---|---|---|
| 1 | May 15 | Jun 28 | May 10 | Jun 25 | May 15 | Jun 28 |
| 2 | May 15 | Null | May 10 | Jun 25 | May 15 | Jun 25 |
| 3 | May 15 | Null | May 10 | Null | May 15 | Project Finish |
| 4 | Oct 15 (> proj finish) | Null | May 10 | Null | Project Start | Project Finish |
| 5 | Null | Jun 28 | Null | Jun 25 | Project Start | Jun 28 |

---

## User Story Synchronization

Enable **Create and Sync Stories** on the project **Settings** page to pull Rally user stories into Clarity as tasks.

**Rules:**
- User story dates populate the task start and finish.
- Child stories (story of a story) are brought in at the **same hierarchy level** — not as subtasks.
- If the parent task already has assignments, story tasks appear at the same level as the parent.
- Only applies when the lowest-level portfolio item is mapped to a Clarity task.

---

## Team Synchronization

When **Create and Sync Team** is enabled, Rally users assigned to initiatives, features, and child components are added to the Clarity project team.

| Situation | Result in Clarity |
|---|---|
| Rally user already exists as a Clarity resource | Appears on the project **Team** tab |
| Rally user does not exist in Clarity | Listed in the **Missing Resources** portlet |
| Same name, different email | Listed in **Possible Matching Resources** column |

> [!NOTE]
> The **Missing Resources** portlet is not on any default page. Add it via **Manage my Tabs** on the **Overview: General** page.

> [!WARNING]
> Once a Rally resource is synced to a Clarity project team, removing the resource from Rally does NOT remove them from the Clarity team. The same applies to tasks: Rally features removed from Rally remain in Clarity but stop being updated.

---

## Dashboards for Monitoring Integrated Projects

### Product Roadmap Dashboard

**Access:** **Home > Dashboards > Product Roadmap** (Portfolio Item integration, Classic PPM 15.5.1+)

| Portlet | What it shows |
|---|---|
| **Agile Product Roadmap** | Product/investment hierarchy with story points, % done, drill-down capability |
| **Agile Product Roadmap by Milestone** | Products grouped by milestone with drill-down |
| **Agile Product Roadmap by Release** | Products grouped by release with drill-down |

Roadmap Gantt color codes: Red (<25% done), Yellow (25–75%), Green (>75%), White (undefined).

### Agile Project Status Dashboard

**Access:** Open a project → **Properties > Settings** → select **Agile Project Status** from **Dashboard View** → click **Dashboard**

| Portlet | What it shows |
|---|---|
| **Overview** | Total estimated/accepted story points and % done |
| **Accepted Features** | Bar graph: completed story points vs. total; completed stories vs. total |
| **Feature Status** | Feature list with progress bar, agile state, planned dates, release, milestones, story points |
| **Project Status** | Budget, planned cost, variance, stage, schedule/scope/cost stoplights |
| **Status Report List** | Project status reports with stoplight indicators |

---

## Troubleshooting

### Integration fails on first run

**Symptoms:** Synchronize Agile Central job errors out; no initiative created in Rally.

**Check:**
1. **Administration > General Settings > Integrations** — verify Rally URL, Workspace ID, and API Key.
2. **Administration > General Settings > System Options** — confirm **REST API Status = Enabled**.
3. **Administration > Project Management > Settings** — confirm an **Agile Integration Owner** is assigned with the required access rights.
4. Verify the Rally server is reachable from the Clarity server.

**Fix:** Correct values and rerun **Synchronize Agile Central**.

### SSL handshake errors (on-premise only)

**Symptom:** Synchronize Agile Central job fails with SSL handshake errors.

**Fix:** Import the Rally SSL certificate into the Clarity JDK/JRE keystore:

```bash
keytool -import -keystore cacerts -alias <adcert> -file <certificate.cer> \
  -keyalg RSA -trustcacerts -storepass changeit
```

Restart services for both Clarity and Rally after import.

### Initiative deleted in Rally

**Symptom:** Synchronize job error; **Synchronize** checkbox unchecked automatically; sync status = Failed.

**Fix:** Relink the Clarity project to a new Rally portfolio item via XOG (see Scenario 4 above) or by reconfiguring **Properties > Agile Integration Settings**.

### Feature moved to a different initiative in Rally

**Symptom:** The old Clarity task remains but stops receiving updates; a duplicate task appears for the feature under the new initiative.

**Behavior:** This is expected — the old task is orphaned, and a new task is created. There is no automatic cleanup of orphaned tasks.

### On-premise proxy configuration

If Clarity is behind a proxy, configure the proxy in **Administration > General Settings > Integrations** on the integration record:

| Field | Value |
|---|---|
| **Proxy Server** | Full URL (http:// or https://) |
| **Proxy Port** | Numeric port |
| **Proxy User Name / Password** | If proxy requires authentication |

> [!WARNING]
> After saving proxy server information, restart both the Clarity application server and background services.

---

## Required Access Rights Reference

### Agile Integration Owner

Assign these **global access rights** to the user defined as the Agile Integration Owner in **Administration > Project Management > Settings**:

**Both integration types:**
- API - Access
- Projects - Navigate
- Resource - Navigate
- Project - Edit Management (for specific projects or All)

**Investment integrations (additional):**
- Agile Central Investment - Create
- Agile Central Investment - Edit All

**Portfolio Item integrations (additional):**
- Portfolio Item Type - Create
- Portfolio Item Type - Edit All
- Portfolio Item Type - View All
- Portfolio Item Type - XOG Access

**As needed:**
- Resource - View
- Resource - Hard Book

---

## Related
- [[Rally Integration]] — architecture, configuration fields, attribute mapping tables
- [[_MOC Integrations]]
- [[Authentication and Keys]]

%%Source: p4802-4853%%
