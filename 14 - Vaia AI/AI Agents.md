---
title: Configure AI Agents in Vaia
tags:
  - admin
aliases:
  - AI Agents
---
# Configure AI Agents in Vaia

7. Proceed through the Tags and Review + Submit tabs.
8. Click Create to deploy the resource.
### Step 3: Retrieve the API Key and Endpoint
1. Wait for the deployment to finish.
2. Click Go to Resource.
3. In the left panel, click Keys and Endpoint.
4. Copy the following:
- API Key
- Endpoint URL
REMEMBER Understanding the Difference Between Microsoft Copilot and Microsoft Azure

## Need to Know

## Microsoft Copilot

## Microsoft Azure

## What It Is?

Use Copilot as a smart assistant inside Microsoft 365 apps like Word, Excel, Outlook, and in tools like GitHub.

Use Azure as Microsoft's cloud platform that gives you the tools to build and run applications.

## What It Does?

Get help with writing, summarizing, coding, Offer GenAI capabilities and support for creating,

and automating routine tasks.

training, and managing your own AI models and services.

## How It Works?

Use Copilot to receive real-time assistance 1.

with advanced AI models, like GPT-4, hosted

by Microsoft.

2.

3.

Send your data to Azure using APIs or other services. Use built-in tools like Azure OpenAI or Machine Learning to process it. Share results through apps, dashboards, or APIs.

## Who It's For?

Use it if you're a business user or a developer who wants to work faster without needing deep AI knowledge.

Use Azure if you're a developer, data scientist, or business building custom AI solutions.

Will It Work With Copilot paid subscription can only be used Azure provides API access to AI and will work with Vaia.

## Vaia?

with Microsoft Office Applications and will not

work with Vaia.

> [!important]
> Note:

Copilot is not an AI service itself; it uses

Azure is a cloud platform that offers the tools and

Azure, which has AI to work. Copilot

## infrastructure needed to build, manage, and run

## uses Azure to run, process data, store

applications. It supports AI and helps services like

information, and connect with other services. Copilot work by processing data and connecting with

other tools.

## Configure AI Agents in Vaia

The AI Agents feature in Vaia enables you to create intelligent assistants that interact with users and data directly within Clarity.
These agents can operate at the Workspace, Object or Attribute level, providing automated responses, datadriven insights, and contextual guidance to enhance user productivity.
Watch the following video to learn more about AI Agents and other enhancements in Clarity.

This page coves the following topics:

- Prerequisite
- Create an AI Agent
- Manage Records Using the Grid Layout
- Configure a "Workspace" AI Agent
- Configure an "Object" AI Agent
- Define Follow-Up Prompts
- Use Charts and TSV in Prompt

Prerequisite Before you begin, ensure that you have the Administration - Vaia - Navigate access right. This access allows you to view and configure AI agents within the Vaia Tile, under Administration.

Create an AI Agent Use the AI Agents tab in Vaia to define new agents that operate on specific Clarity objects or workspaces. Creating an agent involves specifying its name, type, and context, which determine where and how the agent functions within Clarity.

1. Click New Agent.
2. Enter the Name of the agent.
3. Select the Type from the drop-down list. The agent type determines the Clarity object (for example, Project or Idea)
associated with the agent. 4. Select the Context:
- Workspace
- The agent is available within the workspace of the selected object.
- Object
- The agent is available for all instances of the selected object.
- Attribute
- The agent is available specifically for a chosen attribute within the object. 5. Choose Output Location:

- Chat Panel:The AI response appears in the chat flyout panel.
- Text Field: The AI response is sent directly into the configured attribute.
6. Define Attribute (If Applicable): If you selected Attribute as the context, choose the specific Object Attribute where the GenAI functionality will perform.
7. Click Create. REMEMBER The agent ID follows a predefined syntax (CC######) to maintain system consistency.
> [!important]
> Some of the key points to remember are:
- Configuring an AI Agent does not automatically enable it. Admins will need to enable the AI Agent from the agent grid view after they have completed the configuration.
- Once an agent is created, its "Type" and "Context" cannot be changed. Admins will need to redefine the agent to have different values.
- AI Agents support security controls that allow you to expose agents only to selected Clarity Access Groups, similar to the AI Actions functionality.
What's Next? Click the agent name to configure its details. Manage Records Using the Grid Layout The Clarity Grid is a flexible, interactive workspace that lets you manage, analyze, and visualize records efficiently.
It provides options for data editing, conditional formatting, grouping, charting, and exporting, giving you a spreadsheet-like experience directly within Clarity. Key Capabilities:
- Edit Data: Right-click to edit records directly. Pin, resize, reorder, or reset columns to personalize your grid view.
- Format Data: Apply Conditional Formatting to highlight data based on specific rules.
- Customize Columns: Use the Column Panel to show or hide columns as needed.
- Group Records: Drag up to three column headers to use the Group By feature and view data in logical groups.
- Bulk Delete: Select and delete multiple records at once.
- Export Data: Export grid data to a CSV file. Clarity supports up to 250,000 rows.
- Search and Filter: Use the search bar and filters to locate or isolate specific records quickly.
- Save and Share Views: Save custom grid views and share them with other users.
Configure a "Workspace" AI Agent A Workspace-level AI Agent operates within a specific workspace (such as Project or Idea, etc.) and uses configured prompts to interact with the Large Language Model (LLM).
You can enhance prompts by adding metadata and data sources to ensure the LLM receives the right context and data. Follow these steps:
1. Click the Name of the agent to configure agent details.
2. Edit the Prompt that will be sent to the LLM when the agent is invoked.
3. Enhance the prompt using the following options:
- Add Metadata: Specify the object name.
- Add Data Source (CSV): Include curated data from Clarity reports. Only reports with a Data Extraction (CSV) layout
format appear in the lookup.

Once a report is selected, Clarity adds its ID to the prompt using the syntax: ##D:<Report ID>## Example: ##D:RPT00000022## - Add File: Select the uploaded attachments to include in the agent's execution. 4.
Use Attachments to upload the documents you want the agent to access. You can upload up to 10 documents. REMEMBER Uploading files here does not automatically include them with the prompt.
However, all uploaded documents remain available to the end user for reference during the interaction. 5. Click Reset to Default to restore the prompt to its original configuration.
> [!note]
> Some of the key points to remember are: - The user must have access to the included report. - Do not manually modify the report ID. - Only "Data Extraction (CSV)" reports can be included as data sources in the prompt.
- The report's filters, security, and period settings control the data sent to the LLM.
- After you add ten reports to a prompt, Clarity disables the Add Data Source (CSV) button.
- Numeric data respects the user's unit of measure settings.
- If a report includes TSV configuration, Clarity uses the report's defined periods when sending data.
1. Click the Name of the agent to configure agent details.
2. Edit the Prompt that will be sent to the LLM when the agent runs.
3. Enhance the prompt using these options:
- Add Attribute: Select an attribute from the object associated with the agent. NOTE You can include Large String
- Rich Text attributes in AI Agent prompts.
- Add Metadata: Specify the object name.
- Add Data Source (CSV): Include data using the same steps as for a Workspace-level agent.
- Add Data Source (CSV) with Context: Filter report data for the specific object instance:
- Select a published report with the Data Extraction (CSV) layout format.
- Specify the key value (for example, Investment Key) that maps the report to the object instance. This key
attribute must be a column in the report and should be the internal ID (5 million number) of the object instance. The syntax to include the report is: ##D:<Report ID>.<Object ID>_<Object Key Value>## Example: ##D:RPT00000018.inv____investment_key##

4. Add File: Select the uploaded attachments to include in the agent's execution.
5. Use Attachments to upload the documents you want the agent to access. You can upload up to 10 documents.
REMEMBER Uploading files here does not automatically include them with the prompt. However, all uploaded documents remain available to the end user for reference during the interaction. 6.
Click Reset to Default to restore the default prompt. NOTICE The same conditions apply to Add Data Source (CSV) with Context as to Add Data Source (CSV).
Define Follow-Up Prompts Follow-up prompts allow you to define additional interactions that occur after the initial AI agent execution.
These prompts help users continue their conversation with the LLM, enabling a more natural and interactive experience.

1. Click Add Prompt.
2. Enter the Prompt Name.
3. Enter the Prompt Text to send to the LLM.
> [!note]
> Some of the key points to remember are: - The prompt text box displays five lines by default. Drag to expand the area; it resets when you navigate away. - Follow-up prompts do not support additional data sources.
- Each follow-up prompt automatically includes all previous prompts, data sources, and LLM responses in the chat panel.
- You can define up to five follow-up prompts.
- You can delete follow-up prompts as needed.
> [!important]
> Toggle ON the Allow free-form input option to allow users to enter their own follow-up prompts and continue interacting with the LLM.
End-User Experience: Interacting with Agent Files When an agent is configured with multiple documents, you can interact with those files dynamically during your session.
Even if only one document is sent as part of the initial prompt, you can access and reference all documents at any time. Access and Reference Documents

1. View Available Files: Type "+" in the prompt area to open the list of configured documents.
2. Select a Document: Click a file from the list to add it to your prompt text field.
3. Submit for Analysis: Enter your question regarding the file and press Enter. View or Download Files You can interact with attached files directly within the chat interface: - Open/Download: Click the document name within the chat panel to view the content or download the file to your
device.

Execute Multiple AI Agents Run multiple AI Agents simultaneously based on their configured context. Follow these guidelines to manage concurrent execution behavior.
Execute Attribute-Based Agents - Simultaneous Processing: Click the execution icon for multiple attributes to trigger linked agents concurrently.
- Compatibility: Run Attribute-based agents while a Workspace or Object-based agent is in progress.
Execute Workspace and Object-Based Agents - Sequential Execution: Complete the active Workspace or Object agent before starting another of the same type.
- Monitor Icon Status: Observe the agent icon; it re-enables only after the current process completes. Execution Compatibility Matrix

## Context Type Attribute Object Workspace

## Simultaneous with Same Type? Yes No No

Simultaneous with Other Types? Yes Yes (with Attribute) Yes (with Attribute)

Use Charts and TSV in Prompt 01. AI to Visualize Data Using Charts The AI Panel supports building charts to help visualize data directly within Clarity.
This capability allows users to generate graphical representations of data--such as bar charts or pie charts--by simply prompting the AI Agent.
Charts are created using the Highcharts library, which is included with Clarity and also used for Clarity widgets and reports. Important: When asking the LLM to build charts, you must include the phrase using highcharts in your prompt.
Without this instruction, the LLM may attempt to generate chart code using an unsupported library. Sample Prompts:
- Build a pie chart, using highcharts, to help visualize the financial data.
- Generate a bar chart, using highcharts, with the count of investments by strategy.

02. Using TSV Reports with AI Agents When using TSV (Time-Scaled Value) reports as a data source, it is important to help the LLM understand how the data is structured.
This ensures that the AI can interpret time-phased data correctly and generate accurate insights or charts. Sample Prompt Defining the Data Structure You are a Project Manager analyzing the health of the project.
Based on the following project data, analyze the financial condition of the project and display charts using highcharts. Data Structure Rules
1. Two-Row Header: The first two rows of the data constitute the complete header.
2. Fixed Initial Columns: The first three columns are fixed identifiers for each record and do not relate to dates:
- Column 1 (Row 2): Investment Key
- Column 2 (Row 2): Name (maps to Investment in Row 1)
- Column 3 (Row 2): Transaction Class (maps to Cost Plan Detail in Row 1) 3. Date-Spanning Headers: Starting from the fourth column, the header structure changes:
- Row 1 (Top Header): Contains YYYY-MM dates (for example, 2025-08, 2025-09). Each date from Row 1 spans
2. An empty string ("") in Row 1 indicates the second column under the preceding date. - Row 2 (Sub-Header): Under each date from Row 1, there are two distinct metrics -- Cost and Actual Cost. For example: - 2025-08 applies to Cost in column 4 and Actual Cost in column
5. - 2025-09 applies to Cost in column 6 and Actual Cost in column 7, and so on.
4. Project Data: ##D:RPT00000066##

## Related
- [[_MOC Vaia AI]]

%%Source: p2630-2637%%

