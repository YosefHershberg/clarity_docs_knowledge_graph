# Using Clarity Vaia (AI)

> Source: Clarity 16.4.1 Documentation PDF

<!-- KG_LINKS_START -->
## Knowledge Graph Links
- Primary domain: [[14 - Vaia AI/_MOC Vaia AI|Vaia AI]]
- Related domains: [[15 - Mobile App/_MOC Mobile App|Mobile App]]
- Canonical notes:
- [[14 - Vaia AI/AI Agents]]
- [[14 - Vaia AI/AI Models]]
- Source index: [[23 - Source Documentation/Source to Knowledge Graph Map]]
<!-- KG_LINKS_END -->


## AI Outline

- H2: Overview (#overview)
- H2: Introducing Vaia (#introducing-vaia)
- H2: Data Flow while Using AI Capabilities (#data-flow-while-using-ai-capabilities)
- H2: Key Steps to Set Up Vaia (#key-steps-to-set-up-vaia)
- H3: 1. Activate the AI Service (#1-activate-the-ai-service)
- H3: 2. Grant Access Rights (#2-grant-access-rights)
- H3: 3. Define AI Integrations (#3-define-ai-integrations)
- H3: 4. Configure and Validate AI Models (#4-configure-and-validate-ai-models)
- H3: 5. Configure AI Agents (#5-configure-ai-agents)
- H3: 6. Monitor Consumption (#6-monitor-consumption)
- H2: Set up Vaia in Clarity (#set-up-vaia-in-clarity)
- H2: Configure AI Models (#configure-ai-models)
- H3: Create an Integration Object in Classic PPM (#create-an-integration-object-in-classic-ppm)
- H3: Configure AI Models (#configure-ai-models)
- H3: Validate Your AI Model (#validate-your-ai-model)
- H3: Generate Private Key for Google Vertex AI (#generate-private-key-for-google-vertex-ai)
- H3: Get the Gemini AI API URL (#get-the-gemini-ai-api-url)
- H3: Generate API Key for OpenAI (#generate-api-key-for-openai)
- H3: Set Up Microsoft Azure with Clarity (#set-up-microsoft-azure-with-clarity)
- H2: Configure AI Agents in Vaia (#configure-ai-agents-in-vaia)
- H3: Prerequisite (#prerequisite)
- H3: Create an AI Agent (#create-an-ai-agent)
- H3: Manage Records Using the Grid Layout (#manage-records-using-the-grid-layout)
- H3: Configure a "Workspace" AI Agent (#configure-a-workspace-ai-agent)
- H3: Configure an "Object" AI Agent (#configure-an-object-ai-agent)
- H3: Define Follow-Up Prompts (#define-follow-up-prompts)
- H3: End-User Experience: Interacting with Agent Files (#end-user-experience-interacting-with-agent-files)
- H3: Execute Multiple AI Agents (#execute-multiple-ai-agents)
- H3: Use Charts and TSV in Prompt (#use-charts-and-tsv-in-prompt)
- H2: Brand Your AI (#brand-your-ai)
- H2: Status Report Summarization (#status-report-summarization)
- H3: Prerequisites (#prerequisites)
- H3: Customizing Status Report Summarization (#customizing-status-report-summarization)
- H3: Running the Agent (#running-the-agent)
- H3: Monitoring AI Token Consumption (#monitoring-ai-token-consumption)
- H2: Roadmap Summarization (#roadmap-summarization)
- H3: Configuring Roadmap Summarization (#configuring-roadmap-summarization)
- H2: Data Generation and Revision (#data-generation-and-revision)
- H3: AI Agents for Data Generation (#ai-agents-for-data-generation)
- H3: AI Agents for Data Revision (#ai-agents-for-data-revision)
- H2: Data Review (#data-review)
- H3: Conversational Review and Follow-Up (#conversational-review-and-follow-up)
- H3: Reviewing Multiple Data Sources (#reviewing-multiple-data-sources)
- H2: Natural Language Help Assistant (#natural-language-help-assistant)

## Overview

Modern organizations face unprecedented challenges when adopting artificial intelligence. Clarity addresses these challenges by providing a comprehensive strategic portfolio management platform that bridges AI strategy and execution through systematic planning, governance, and measurement frameworks.

Clarity's approach to AI adoption centers on value-driven implementation that connects technology investments directly to business outcomes. The platform enables organizations to align AI initiatives with strategic objectives using configurable scoring and prioritization frameworks.

At the heart of Clarity's AI capabilities lies **ValueOps Artificial Intelligence Agent (Vaia)**, Clarity's own AI assistant designed to transform data into actionable insights. Vaia integrates into existing Clarity workflows, offering contextual support for information processing and data analysis. It can analyze project status, provide resource allocation recommendations, generate comprehensive summaries, and facilitate strategic decision-making through natural language interaction with complex portfolio data.

> [!TIP]
> To learn more about AI capabilities in ValueOps, visit the AI for ValueOps page.

---

## Introducing Vaia

ValueOps Artificial Intelligence Agent (Vaia) represents Broadcom's flagship AI assistant. Originally launched as "Clarity Concierge" in version 16.2.1, the platform was rebranded to Vaia in Clarity 16.3.0 to align with the broader ValueOps ecosystem vision.

Vaia leverages the comprehensive data model spanning Clarity, Rally, and ValueOps ConnectALL platforms, enabling complex analysis across investment status, team skills and capacity, historical trends, and financial actuals.

---

## Data Flow while Using AI Capabilities

The Clarity AI workflow begins when users interact with AI-enabled features through dedicated AI action buttons that appear on configured objects and attributes.

When a user initiates an AI action, Clarity's RAG implementation:

1. Retrieves relevant context data associated with the specific object and attribute being processed. For subobjects, the RAG engine automatically includes parent object information.
2. Constructs an augmented prompt combining the pre-configured prompt template from the Enable AI tab with the retrieved contextual data, user input, and any relevant organizational information.
3. Securely transmits the augmented prompt to the customer's chosen Large Language Model provider.

Clarity supports integration with:
- **Google Gemini**
- **OpenAI ChatGPT**
- **Microsoft Azure AI**

Once the LLM generates its response, Clarity's response formatting engine processes the output for the platform's display requirements, then presents it within the appropriate interface.

---

## Key Steps to Set Up Vaia

### 1. Activate the AI Service

Enable the core functionality within the Clarity administration site.
- Navigate to **System Options** and find the **Activate Vaia AI Service** checkbox.
- Check the box to enable AI.

> [!NOTE]
> For upgrades, this setting is retained if previously enabled; otherwise, it defaults to off.

### 2. Grant Access Rights

Assign the **Administration - Vaia - Navigate** access right to administrators to allow them to modify Vaia settings and integrations.

### 3. Define AI Integrations

Connect Clarity to your preferred LLM provider under **Integrations**:
- **Google Gemini:** Supports Vertex API (private key) or standard API keys.
- **Microsoft Azure and OpenAI:** Supported via standard API keys.

### 4. Configure and Validate AI Models

Set up specific models within Modern UX administration.
- **Validation:** Right-click your configured model and select **Validate Model**. Clarity runs a test API call.
- **File Parameters:** If using agents that process documents, define:

| Parameter | Description |
|---|---|
| **File Upload URL** | Required for providers like OpenAI |
| **Max File Size** | Set limits (defaults apply if left blank) |
| **Allowed Extensions** | Define supported file types to prevent errors |

### 5. Configure AI Agents

Define AI behavior in the **AI Agents** tab.

**Define Agent Scope:**
- **Type:** Select the object (e.g., Project, Roadmap).
- **Context:**
- **Workspace:** Runs across all instances (Output: Chat Panel).
- **Object:** Runs for one specific instance (Output: Chat Panel).
- **Attribute:** Runs on a specific field (Output: Chat Panel or Text Field).

**Enhance Prompts and Data:**
- Rich Text Support: Include RTF attributes within prompts.
- Data Sources: Use CSV reports or upload files directly.
- File Referencing: Use the **Add File** button or "+" sign in chat.

**Migration and Customization:**
- Legacy summaries can be converted to Agents.
- Upload a custom Avatar/Icon and rename the assistant under the **Branding** tab.

### 6. Monitor Consumption

Track costs and usage via the **Queries** functionality in Modern UX. Create queries to monitor token usage, service providers, and user activity.

---

## Set up Vaia in Clarity

Setting up Vaia is a streamlined, administrator-led process. Administrators navigate to **System Options** and enable the **Activate Vaia AI Service** toggle. Once activated, administrators must be granted the **Administration - Vaia - Navigate** access right.

> [!IMPORTANT]
> **Disclaimer:** By activating, you agree to share some of your Clarity data with a third-party Generative AI service. The Service uses emerging technology, may generate inaccurate output, and is not designed for regulatory, legal, or other obligations.

> [!WARNING]
> Clarity displays AI-generated text as returned by the AI Service. AI models continually update text format over time. For example, when Gemini Pro stopped sending data in HTML format, users started seeing responses with asterisk markup. You can change the model to Gemini Pro Vision to fix this.

Follow these steps:

1. Navigate to **System Options** in Classic PPM and select **ACTIVATE VAIA AI SERVICE**.
2. Grant the **Administration - Vaia - Navigate** access right to the administrators.

---

## Configure AI Models

Clarity supports Google Gemini (via Vertex AI and standard API keys), Microsoft Azure OpenAI, and direct OpenAI services.

For Google Cloud Platform integration, administrators can choose between a service account with Vertex AI access (JSON private key) or a standard API key (starting with 16.4.1). Microsoft Azure requires an active Azure subscription with OpenAI services enabled. Direct OpenAI requires valid API credentials.

Key file-handling attributes within the model page:
- **File Upload URL:** Required for models like OpenAI that handle documents as a separate payload.
- **File Upload Maximum Size (MB):** Defaults to Clarity's system limit if blank.
- **Supported File Extensions:** Define which document types the model can process.

### Create an Integration Object in Classic PPM

1. Log in to Classic PPM.
2. Click **Administration**, **General Settings**, **Integrations**.
3. Click **New**.
4. Complete the fields:

| Field | Description |
|---|---|
| **Areas** | The software application or business area (e.g., Vaia) |
| **Vendor** | The company name (e.g., Google/OpenAI) |
| **Supplier** | The implementation company (e.g., Broadcom) |
| **Integration URL** | The URL for the integration instance |
| **Integration API Key** | The key to access the AI service |

### Configure AI Models

1. Log into Clarity, click **Administration**, **Vaia**, **AI Models**.
2. Specify the AI model code.
3. Specify the Clarity integration instance.
4. Set the maximum number of tokens.
5. Define the temperature setting (0 to 1):
- Higher values (e.g., 0.8): More varied and creative responses.
- Lower values (e.g., 0.2): More predictable and focused output.
6. Configure File Upload Attributes (URL, Max Size, Supported Extensions).
7. Select the AI Service to be used.

> [!IMPORTANT]
> - The maximum token limit varies by LLM. Refer to the provider's documentation.
> - Setting tokens higher than supported causes an error.
> - If the response exceeds the token limit, a truncation error message appears.
> - Temperature must be between 0 and 1.

**Supported File Extensions by Provider:**

| Provider / Model | Supported Extensions |
|---|---|
| OpenAI (GPT-4 & Higher) | txt, csv, pdf, jpg, png, gif, jpeg, css, html, js, md, php, py, rb, json, sh |
| Microsoft Azure (GPT-4 & Higher) | txt, csv, js, py, rb, sh, jpg, png, gif, jpeg, json |
| Google Gemini | txt, csv, pdf, jpg, png, gif, jpeg, css, html, js |
| Google Gemini Vertex | txt, csv, pdf, jpg, png, gif, jpeg, css, html, js |

**File Upload URL Requirements:**

| AI API | File Upload URL Required | Sample URL |
|---|---|---|
| Vertex API | Not required (inline) | -- |
| Gemini API | Required | `https://generativelanguage.googleapis.com/upload/v1beta/files` |
| OpenAI API | Required | `https://api.openai.com/v1/files` |
| MS Azure API | Not required (inline) | -- |

**Error Handling:**

| Scenario | Message |
|---|---|
| File Upload URL required but not populated | "File upload url is not configured for the AI model" |
| AI API key not configured correctly | "API--1086: Missing or invalid configuration" |
| Vaia configuration disabled | "API--1019: Could not process the request due to internal error" |

> [!NOTE]
> - The AI Agents tab replaces the legacy "Enable AI" configuration.
> - Only one AI service can be specified as default.
> - Starting with 16.4.1, Gemini supports API keys. You can specify the model name (e.g., `gemini-1.5-pro`) directly.

### Validate Your AI Model

1. Navigate to **Administration**, **Vaia**, **AI Models**.
2. Right-click the configured row.
3. Click **Validate Model**.
4. A success or failure message appears with the exact error from the AI provider (if any).

### Generate Private Key for Google Vertex AI

1. Log into Google Cloud Platform's console as the service account owner.
2. Select **IAM & Admin**, **Service Accounts**, navigate to the **Keys** tab.
3. Add a new key of type "JSON".

### Get the Gemini AI API URL

Ensure the service account has: Vertex AI Service Agent and Service Account Token Creator access rights.

1. Navigate to the GCP Console Vertex AI URL within your project.
2. Click **GET CODE**.
3. Navigate to the **CURL** tab.
4. Copy the Post URL and replace parameters with the correct endpoint, project ID, and location ID. Set the model id as `gemini-pro`.

### Generate API Key for OpenAI

1. Log into the OpenAI platform.
2. Click your User Account, then **View API Keys**.
3. Click **Create New Secret Key** and enter details.

**OpenAI API URL:** `https://api.openai.com/v1/chat/completions`

### Set Up Microsoft Azure with Clarity

#### 1. Add a Custom Domain Name in Microsoft Azure (Optional)

1. In Azure Portal, open **Azure Active Directory**.
2. Click **Custom domain names**, then **Add custom domain**.
3. Verify domain ownership by adding a TXT record.
4. Optionally set as primary domain.

#### 2. Create Azure OpenAI Resource and Retrieve API Credentials

1. In Azure Portal, search for **Azure OpenAI** and click **Create**.
2. Select Resource Group, Region, Name, and Pricing Tier.
3. Configure network access and deploy.
4. After deployment, go to the resource and click **Keys and Endpoint**.
5. Copy the **API Key** and **Endpoint URL**.

> [!NOTE]
> **Microsoft Copilot vs. Microsoft Azure:** Copilot is a smart assistant inside Microsoft 365 apps and will not work with Vaia. Azure is a cloud platform that provides GenAI capabilities and API access -- this is what integrates with Vaia.

---

## Configure AI Agents in Vaia

AI Agents enable you to create intelligent assistants that interact with users and data directly within Clarity. They can operate at the Workspace, Object, or Attribute level.

### Prerequisite

Ensure you have the **Administration - Vaia - Navigate** access right.

### Create an AI Agent

1. Click **New Agent**.
2. Enter the **Name**.
3. Select the **Type** (determines the Clarity object, e.g., Project or Idea).
4. Select the **Context:** Workspace, Object, or Attribute.
5. Choose **Output Location:** Chat Panel or Text Field (only editable for Attribute context).
6. Define the **Attribute** (if Attribute context is selected).
7. Click **Create**.

> [!IMPORTANT]
> - Creating an agent does not automatically enable it. Enable it from the agent grid view after configuration.
> - Once created, Type and Context cannot be changed.
> - AI Agents support security controls that allow exposure only to selected Access Groups.

### Manage Records Using the Grid Layout

The Clarity Grid provides: Edit Data, Format Data (Conditional Formatting), Customize Columns, Group Records (up to 3), Bulk Delete, Export (up to 250,000 rows), Search and Filter, and Save and Share Views.

### Configure a "Workspace" AI Agent

A Workspace-level agent operates within a specific workspace and uses configured prompts.

1. Click the agent **Name** to configure details.
2. Edit the **Prompt** sent to the LLM.
3. Enhance the prompt:
- **Add Metadata:** Specify the object name.
- **Add Data Source (CSV):** Include data from Clarity reports (Data Extraction CSV layout only). Syntax: `##D:<Report ID>##`
- **Add File:** Select uploaded attachments.
4. Use **Attachments** to upload documents (up to 10).
5. Click **Reset to Default** to restore the original prompt.

> [!NOTE]
> - The user must have access to the included report.
> - Do not manually modify the report ID.
> - After 10 reports, the Add Data Source button is disabled.
> - Numeric data respects the user's unit of measure settings.

### Configure an "Object" AI Agent

An Object-level agent operates across all instances of a given object type, with additional context-based options.

1. Click the agent **Name**.
2. Edit the **Prompt**.
3. Enhance the prompt:
- **Add Attribute:** Select an attribute from the object (including Rich Text attributes).
- **Add Metadata:** Specify the object name.
- **Add Data Source (CSV):** Same as Workspace-level.
- **Add Data Source (CSV) with Context:** Filter report data for the specific object instance. Syntax: `##D:<Report ID>.<Object ID>_<Object Key Value>##`
4. Add files and attachments.

### Define Follow-Up Prompts

Follow-up prompts allow additional interactions after the initial agent execution.

1. Click **Add Prompt**.
2. Enter the **Prompt Name** and **Prompt Text**.

> [!NOTE]
> - Follow-up prompts do not support additional data sources.
> - Each follow-up includes all previous prompts, data sources, and LLM responses.
> - You can define up to five follow-up prompts.

> [!IMPORTANT]
> Toggle ON the **Allow free-form input** option to let users enter their own follow-up prompts.

### End-User Experience: Interacting with Agent Files

1. Type "+" in the prompt area to open the list of configured documents.
2. Select a document to add to your prompt.
3. Enter your question and press Enter.
4. Click a document name in the chat panel to view or download.

### Execute Multiple AI Agents

| Context Type | Simultaneous with Same Type? | Simultaneous with Other Types? |
|---|---|---|
| Attribute | Yes | Yes |
| Object | No | Yes (with Attribute) |
| Workspace | No | Yes (with Attribute) |

### Use Charts and TSV in Prompt

#### AI to Visualize Data Using Charts

The AI Panel supports building charts using the **Highcharts** library.

> [!IMPORTANT]
> When asking the LLM to build charts, include the phrase **"using highcharts"** in your prompt.

Sample prompts:
- "Build a pie chart, using highcharts, to help visualize the financial data."
- "Generate a bar chart, using highcharts, with the count of investments by strategy."

#### Using TSV Reports with AI Agents

When using TSV (Time-Scaled Value) reports, include data structure rules in the prompt to help the LLM interpret time-phased data correctly.

> [!IMPORTANT]
> Always define the TSV data structure in your prompt when using time-phased reports.

---

## Brand Your AI

Use the **Branding** tab to customize how your AI capability is presented.
- **Set the AI capability name:** Define how it appears to users across Clarity.
- **Upload a custom logo:** Use a dark-colored logo with transparent background (PNG or GIF, recommended 32px x 32px).

1. Click **Administration**, **Vaia**, **Branding**.
2. Edit the **Name** field.
3. Click **Upload New Logo**.
4. Refresh the page.

> [!TIP]
> If you delete the uploaded logo, the system reverts to the default AI logo.

---

## Status Report Summarization

Status Report Summarization is delivered as a fully integrated AI agent that allows project teams to automatically generate or revise narrative status updates based on key project artifacts.

**Architecture:**
- Delivered as an AI agent aligned with the Vaia AI architecture.
- Existing prompts and configurations are preserved.
- A CSV-based data source and an OOTB report are provided by default.

**Location and Access:**
- Configured at the status report type level.
- Associated with a specific attribute (commonly the Status Narrative attribute).
- When configured with Text Field output: users see **Generate** and **Revise** actions directly on the attribute. Follow-up prompts are not supported in this configuration.

### Prerequisites
- Activated the Vaia AI Service.
- Granted required Vaia administration access rights.
- Configured the AI service provider in Integrations.
- Validated the configured AI model.

### Customizing Status Report Summarization

1. Navigate to **Reporting**, **Report Designer**.
2. Make a copy of the **Status Summary Artifact Sample** report and its data provider.
3. Edit the copied query-based data provider.
4. Publish the custom report.
5. Navigate to **Clarity Administration**, **AI Agents**.
6. Remove the default report from the agent.
7. Add the custom report using **Add Data Source from CSV**.
8. Select the key attribute (Status Report ID).

### Running the Agent

1. Open the relevant investment.
2. Click the **Status** tab.
3. Navigate to the configured attribute.
4. Click the Vaia icon and select **Generate** or **Revise**.

### Monitoring AI Token Consumption

Track usage with the following SQL query:

```sql
SELECT gh.OBJECT_CODE, gl.created_by, u.full_name,
       gh.ATTRIBUTE_CODE, gh.STATUS_CODE,
       gl.PROMPT_TOKEN_COUNT, gl.RESPONSE_TOKEN_COUNT,
       gl.project, gl.model, gl.integration_url, gl.created_date
FROM gen_content_history gh
JOIN gen_contents_logs gl ON gl.GEN_HISTORY_ID = gh.id
JOIN cmn_sec_users u ON u.id = gl.created_by
ORDER BY gl.created_date DESC
```

| Metric | Description |
|---|---|
| AI Service | The specific service used (e.g., Gemini) |
| User | The individual who initiated the AI call |
| Target Object | The object context (e.g., status report) |
| Token Size | Size of prompt and response tokens |
| Status | Success or failure of the AI call |

---

## Roadmap Summarization

Roadmap Summarization is delivered through a Vaia AI agent named **Generate Roadmap Summary**. Unlike earlier implementations, the AI agent relies on user-defined reports rather than reading directly from the UI.

**Key Behavior:**
- Disabled by default until explicitly configured and enabled.
- No OOTB report is provided; a custom roadmap-based report is required.

### Configuring Roadmap Summarization

1. Create a custom roadmap-based report (query-based or object-based data provider).
2. Publish the custom report.
3. Navigate to **Clarity Administration**, **AI Agents**.
4. Open the **Generate Roadmap Summary** agent.
5. Add the custom report as a data source using **Add Data Source from CSV**.
6. Select the key attribute (e.g., Roadmap ID).
7. Enable the agent.

---

## Data Generation and Revision

Vaia enables AI-driven data generation and revision through configurable AI agents that generate new content or revise existing content directly within Clarity attributes.

| Action Mode | Primary Result |
|---|---|
| **Generate** | Populates an empty or existing field with new AI-created data |
| **Revise** | Updates and replaces existing field content based on new instructions |

### AI Agents for Data Generation

**Agent Configuration:**
- Type: Object where the attribute exists
- Context: Attribute
- Output Location: Text Field
- Attribute: Target attribute for content generation

**To generate content:**

1. Navigate to the relevant object.
2. Locate the AI-enabled attribute.
3. Click **Vaia** and select **Generate**.

> [!NOTE]
> When output location is set to Text Field, follow-up prompts are not supported.

### AI Agents for Data Revision

Same configuration as Data Generation, with Attribute set to the target for content revision.

**To revise content:**

1. Navigate to the relevant object.
2. Locate the AI-enabled attribute with existing content.
3. Click **Vaia** and select **Revise**.

---

## Data Review

Vaia supports AI-driven data review that analyzes existing content and provides insights without modifying stored data.

**Agent Configuration:**
- Type: Object where the attribute exists
- Context: Attribute
- Output Location: Chat Panel
- Attribute: Attribute being reviewed

**To run Data Review:**

1. Navigate to the relevant object.
2. Locate the AI-enabled attribute.
3. Click **Vaia** and select **Review**.
4. View the analysis in the chat panel (original attribute content remains unchanged).

### Conversational Review and Follow-Up

When output is set to Chat Panel:
- Users can ask follow-up questions.
- The AI retains conversational context within the session.
- Users can refine, clarify, or probe the analysis before taking action.

### Reviewing Multiple Data Sources
- Reference additional files using the "+" option in the chat panel.
- The AI can compare or correlate attribute content with added files.
- This enables cross-document validation, consistency checks, and impact analysis.

---

## Natural Language Help Assistant

You can use Vaia to ask Clarity-related questions in natural language. Vaia is trained on Clarity Technical Documentation and Support Knowledge base articles.

**Key actions:**
- Ask questions in natural language (e.g., "What access rights do I need to delete a project in Clarity?")
- Mark a response as **Useful** or **Not Useful** using thumbs up/down.
- Provide additional feedback using the **Feedback** icon.

Follow these steps:

1. Log into Clarity and click **Administration**, **Feature Toggles**.
2. Enable the **Global Header Help Icon for the Information Center** feature toggle.
3. Click the **Question Mark** icon next to the Notifications icon.
4. Click **Assistant** to launch Vaia.

> [!NOTE]
> - Each question is a separate thread. Vaia does not preserve conversational context.
> - Vaia can be accessed using the Clarity Information Center (turned off by default; administrators must toggle it on).

> [!WARNING]
> When you use Vaia, you are interacting with a generative AI service. AI-generated output may contain errors. Do not include personal or confidential data in your prompts, and carefully review output before use.
