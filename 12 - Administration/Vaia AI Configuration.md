---
title: Configuring Vaia
tags:
  - admin
aliases:
  - Vaia AI Configuration
---
# Configuring Vaia

Edit View(s)
You can edit a view:
1. Using the Details Panel
2. Double-click a cell in a row and edit the values
You can edit multiple views on the Grid layout using the Bulk Edit capability.
Follow these steps:
1. Open Views in Clarity.
2. Select the views you want to update.
3. Select the Edit button.
4. In the Bulk Edit window, make the relevant changes to multiple views.
5. Click Save to confirm your changes.
> [!important]
> You can edit only the following fields:
> - Name - Owner - Shared - Shared to Groups - Recommended

Delete View(s)
You can delete a view from the context-sensitive menu or multiple views on the grid using the bulk delete capability.
Delete a view
Steps to delete a view using the context-sensitive menu:
1. Open Views in Clarity.
2. Right-click a cell on a row and select Delete Row. The row will be deleted.
Delete multiple views
Steps to delete multiple views using the bulk delete capability:
1. Open Views in Clarity.
2. Select the views and click Delete. A confirmation pop-up window appears, stating - "Are you sure you want to Delete
'n' items?". 3. Click Delete.
This capablity was newly introduced in Clarity 16.2.2.

Configuring Vaia
ValueOps Artificial Intelligence Agent (Vaia) represents Broadcom's flagship AI assistant designed to transform data into actionable insights for enhanced organizational efficiency. Originally launched as "Clarity Concierge" in version 16.2.1, the

platform was rebranded to Vaia in Clarity 16.3.0 to align with the broader ValueOps ecosystem vision.

Vaia stands as the cornerstone of Broadcom's comprehensive AI strategy, designed to integrate seamlessly across all ValueOps products over time, creating a unified intelligent assistant experience for portfolio management, project execution, and strategic decision-making.
The power of Vaia lies in its sophisticated understanding of user needs and preferences, seamlessly integrating into existing workflows to offer contextual support for information processing and data analysis.

Rather than simply providing automated assistance, Vaia empowers users with advanced capabilities that enable higher levels of efficiency, making work experiences more streamlined and impactful through intelligent automation and insight generation.

At its core, Vaia leverages the comprehensive data model that spans Clarity, Rally, and ValueOps ConnectALL platforms, enabling it to perform complex analysis across investment status, team skills and capacity, historical trends, and financial actuals from integrated systems.
> [!important]
> Disclaimer: By activating, you agree to share some of your Clarity data with a third-party Generative AI service (the Service). The Service uses emerging technology, may generate inaccurate output, and is not designed for or intended to meet your regulatory, legal, or other obligations. Use of the Service requires an account with the Service provider and is subject to the terms of your agreement with the Service provider. Broadcom bears no responsibility or liability for the Service, including its use of shared Customer data. WARNING Clarity displays the AI-generated text as it is returned by the AI Service and its model. The AI models keep changing the text format over time, impacting the result displayed in Clarity. A recent example is when Gemini Pro stopped sending data in the HTML format. Hence, Clarity users started seeing responses with an astrix markup. You can change the model to Gemini Pro Vision to fix this issue for now.
> Key Steps to Set Up Vaia 1. Activate the AI Service Enable the core functionality within the Clarity administration site. - Locate the Flag: Go to System Options and find the Activate Vaia AI Service checkbox. - Toggle On: Check this box to enable AI.
> NOTE For upgrades, this setting is retained if previously enabled; otherwise, it defaults to off.
> 2. Grant Access Rights Once activated, authorize your team to manage the tool. - Assign Rights: Assign specific AI configuration access rights to administrators. This allows them to modify Vaia
> settings and integrations.
> 3. Define AI Integrations Connect Clarity to your preferred LLM provider under Integrations. - Google Gemini: Supports Vertex API (private key) or standard API keys. - Microsoft Azure and OpenAI: Supported via standard API keys.
> 4. Configure and Validate AI Models Set up specific models within Modern UX administration.

- Validation: Right-click your configured model and select Validate Model. Clarity runs a test API call to ensure the connection is active.
- File Parameters: If using agents that process documents, define the following:

File Upload URL Max File Size Allowed Extensions

Required for providers like OpenAI. Set limits (defaults apply if left blank). Define supported file types to prevent errors.

5. Configure AI Agents
Define AI behavior within the application in the AI Agents tab.
Define Agent Scope
- Type: Select the object (e.g., Project, Roadmap). - Context:
- Workspace: Runs across all instances (Output: Chat Panel). - Object: Runs for one specific instance (Output: Chat Panel). - Attribute: Runs on a specific field. Output results to the Chat Panel or a Text Field.
Enhance Prompts and Data
- Rich Text Support: Include RTF attributes within prompts. - Data Sources: Use CSV reports or upload files directly. - File Referencing: Use the Add File button to embed documents, or use the "+" sign in chat.
Migration and Customization
- Legacy Summaries: Convert old Status Report and Roadmap summaries to Agents. Re-enable Roadmap summaries post-upgrade with a new report source.
- Branding: Upload a custom Avatar/Icon and rename the assistant under the Branding tab.
6. Monitor Consumption
Track costs and usage via the Queries functionality in Modern UX.
- Custom Tracking: Create queries to monitor token usage, service providers, and user activity.
Additional Information
For more information, please review the following:
- Set up Vaia in Clarity - Configure AI Models - Configure Vaia Using the Enable AI Page - Roadmap Summarization - Status Report Summarization - Data Generation and Revision - Data Review - YouTube Video Playlist - Value Drive AI Whitepaper - Vaia Technical Whitepaper - Value Stream Management Page

## Related
- [[_MOC Administration]]

%%Source: p1983-1985%%


