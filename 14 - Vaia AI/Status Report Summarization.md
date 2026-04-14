---
title: Status Report Summarization
tags:
  - howto
aliases:
  - Status Report Summarization
---
# Status Report Summarization

3. Click Vaia (Beta).
4. Click Branding.
5. Edit the Name field to define the new AI name.
6. Click Upload New Logo to upload your logo file.
7. Refresh the page to view the updated name on the Vaia tile and header.

> [!note]
> Some of the key points to remember are: - If an agent is configured, the new logo will appear automatically, and the tooltip will display the updated name.
- If the Free-Form Text Prompt is enabled in the agent, the updated name will also appear in Free-Form Text Prompt.
- The new logo will also appear as the AI avatar within the Chat Panel.
- The new logo does not apply to Generative AI features used in Rich Text Field (RTF) attributes. Status Report Summarization Vaia, Clarity's AI capability, provides Status Report Summarization as a fully integrated AI agent.
This capability improves governance, extensibility, and transparency while preserving backward compatibility for existing configurations.
Status Report Summarization allows project teams to automatically generate or revise narrative status updates based on key project artifacts such as milestones, risks, issues, and financial indicators.
This capability is delivered as an AI agent that is tightly integrated with status report attributes. AI Agent Architecture

- Status Report Summarization is delivered as an AI agent aligned with the Vaia AI architecture.
- Existing prompts and configurations are preserved when the feature is enabled.
- A CSV-based context data source and an out-of-the-box (OOTB) report are provided by default to supply the agent
with relevant status report artifacts. This ensures a seamless transition with no loss of functionality or configuration. Location and Access - The Status Report Summarization agent is configured at the status report type level.
- It is associated with a specific attribute, most commonly the Status Narrative attribute.
- When configured with a Text Field output location:
- Users see agent actions such as Generate and Revise directly on the attribute.
- The AI-generated output is written directly into the attribute.
- Because the output is not delivered through an interactive chat panel, follow-up prompts are not supported in this
configuration. Prerequisites and Configuration Ensure that your administrator has performed the following actions so that you can leverage this capability:

- Activated the Vaia AI Service in the System Options.
- Granted the required Vaia administration access rights.
- Configured the required AI service provider in Integrations.
- Validated the configured AI model, if required. Out-of-the-Box Status Report Data Source As part of the upgrade, Clarity provides a default report for Status Report Summarization:
- Report Name: Status Summary Artifact Sample
- Data Provider: status summary artifact
- Provider Type: Query-based What the OOTB Report Does
- Uses a query with multiple unions to collect relevant project and status report artifacts.
- Pulls the same artifacts that were used by the legacy AI action (for example, investment identifiers, status report
identifiers, and related status artifacts). - Ensures continuity between pre-Clarity 16.4.1 behavior and the new AI agent model.
1. Navigate to Reporting, Report Designer.
2. Make a copy of the Status Summary Artifact Sample report and its associated data provider.
3. Edit the copied query-based data provider to add or remove artifacts as needed.
4. Publish the custom report.
5. Navigate to Clarity Administration, AI Agents.
6. Remove the default report from the Status Report Summarization agent.
7. Add the custom report using Add Data Source from CSV.
8. Select the key attribute (Status Report ID).
1. Log in to Clarity and open the relevant investment.
2. Click the Status tab.
3. Navigate to the configured attribute.
4. Click the Vaia icon and select Generate or Revise.
5. Review the AI-generated summary, which is automatically populated in the attribute.
> [!note]
> Rich-Text Field (RTF) Support - RTF attributes can be included in the AI agent prompt. - Content stored in rich text fields can be analyzed and summarized by the AI. - This expands the range of contextual data available for generating high-quality status narratives.

## Related
- [[_MOC Vaia AI]]

%%Source: p2640-2642%%

