---
title: Configure AI Models
tags:
  - admin
aliases:
  - AI Models
---
# Configure AI Models

Setting up Vaia in Clarity has evolved into a streamlined, Administrator-led process.
While initial environment provisioning remains a prerequisite, administrators now take the lead by navigating to System Options and enabling the Activate Vaia AI Service toggle.
This activation is supported for both new installations and upgrades, with existing configurations preserved for returning users. Once the service is activated, attention shifts to governance and connectivity.
Administrators must be granted the Administration - Vaia - Navigate access right to access and manage the Vaia configuration suite.
> [!important]
> Disclaimer: By activating, you agree to share some of your Clarity data with a third-party Generative AI service (the Service).
The Service uses emerging technology, may generate inaccurate output, and is not designed for or intended to meet your regulatory, legal, or other obligations.
Use of the Service requires an account with the Service provider and is subject to the terms of your agreement with the Service provider.
Broadcom bears no responsibility or liability for the Service, including its use of shared Customer data. WARNING Clarity displays the AI-generated text as it is returned by the AI Service and its model.
The AI models continually update the text format over time, affecting the results displayed in Clarity. A recent example is when Gemini Pro stopped sending data in the HTML format.
Hence, Clarity users started seeing responses with an astrix markup. You can change the model to Gemini Pro Vision to fix this issue for now. Follow these steps:
1. Navigate to System Options in Classic PPM and select ACTIVATE VAIA AI SERVICE. To learn more, see Configure General System Settings.
2. Grant the Administration - Vaia - Navigate access right to the administrators who will decide which attributes will be sent to the Generative AI service from Clarity. To learn more, see Administration Access Rights.
Configure AI Models AI model configuration in Vaia requires establishing connections to supported AI service providers through the AI Models administration interface.
Clarity supports Google Gemini (via both Vertex AI and standard API keys), Microsoft Azure OpenAI, and direct OpenAI services. The configuration process begins by creating an integration object to connect Clarity to the AI provider.
You then navigate to the Vaia administration section to access the AI Models configuration page.
Each AI service requires specific connection parameters and authentication credentials that must be obtained from the respective cloud providers before configuration can be completed.
For Google Cloud Platform integration, administrators can now choose between two methods: establishing a service account with Vertex AI access (using a JSON private key) or, starting with version 16.4.1, using a standard API key.
The configuration requires specifying the Google Cloud project ID, the appropriate regional endpoint, and the credentials to allow Gemini access.
Microsoft Azure OpenAI integration requires an active Azure subscription with OpenAI services enabled, specific API keys, and endpoint configuration.
Direct OpenAI integration requires valid OpenAI API credentials and an endpoint specification. The AI Models interface allows organizations to maintain multiple AI provider connections simultaneously.
Each configuration row requires specific authentication details and parameters to ensure proper communication. With the latest updates, administrators must also configure three key file-handling attributes within the model page:
- File Upload URL: Required for models like OpenAI that handle documents as a separate payload.
- File Upload Maximum Size (MB): To limit document sizes (defaults to Clarity's system limit if blank).
- Supported File Extensions: To define which document types (e.g., txt, pdf, csv) the model can process.
Testing connectivity is a critical final step. Administrators can right-click a model in the grid and select Validate Model to perform a live API call.
This verifies that Clarity can successfully communicate with the provider and access the specific model (e.g., gpt-4 or gemini-1.5-pro) before it is deployed to users.
Once correctly configured, administrators can specify default models to balance performance and cost based on organizational needs.

Create an Integration Object in Classic PPM You can configure the Clarity-GCP/OpenAI integration by creating an integration object.
You create an integration object from the Integrations page in Classic PPM, which is the one-stop shop to define and maintain all integration information.
The key pieces of information you need to create an integration object are: - Integration URL - API Key (or Private Key for Vertex API users)
1. Log in to Classic PPM.
2. Click Administration, General Settings, Integrations.
3. Click New.
4. Complete the following fields and click Save.

## Areas Vendor Supplier Integration URL Integration API Key

## Field Name

Description The software application or business area of the vendor (for example, Vaia). The company name with which Clarity is integrating (for example, Google/OpenAI).
The company name that is implementing the integration (for example, Broadcom). The URL for the integration instance (Vertex/Open AI). The key that is used to access and retrieve data from Vertex AI/ Open AI.

## Configure AI Models

You can configure AI Service models and configure which AI service will be leveraged by Clarity. Clarity currently supports Microsoft Azure, Open AI and Google Vertex AI.

## Follow these steps:
1. Log into Clarity and click Administration to open the Administration workspace.
2. Click Vaia, click AI Models.
3. Specify the AI model code as supported by the AI service. Gemini will not use the model code name, but OpenAI will
4. Specify the Clarity integration instance that has the AI service URL and key.
5. Set the maximum number of tokens the LLM can generate in its response.
6. Define the temperature setting to control the randomness and creativity of the LLM's output.
- Higher values (for example, 0.8) produce more varied and creative responses.
- Lower values (for example, 0.2) result in more predictable and focused output. 7. Configure File Upload Attributes:
- File Upload URL: Provide the specific API endpoint if your LLM (like OpenAI) requires documents to be sent as a
separate payload. - File Upload Maximum Size (MB): Set a limit for document uploads. Leaving this blank defaults to your standard Clarity file size restrictions.
- Supported File Extensions: List the file types your LLM supports, separated by commas (e.g., txt, pdf, csv). This prevents users from uploading incompatible formats. 8. Select one of the AI Services to be used to generate text.
> [!important]
> Some key points to remember are:
- The maximum token limit varies depending on the configured LLM. Refer to the LLM provider's documentation for supported limits.
- Setting the maximum number of tokens higher than what the LLM supports will cause the LLM to return an error.
- If the LLM response exceeds the configured token limit, the following error message will appear: AI response is truncated due to reaching the maximum token limit for this agent. Start a new agent to reset the limit.
- The Temperature value must be set between 0 and 1.
- Supported File Extensions by Provider
> [!important]
> The following list is valid as of the current release. AI providers frequently update their multimodal capabilities and supported formats. Refer to your specific AI service provider and model version (e.g., GPT-5, Gemini 2.0) to confirm the most current supported extensions.

## Provider / Model

## Supported Extensions

OpenAI (GPT-4 & Higher) Microsoft Azure (GPT-4 & Higher) Google Gemini

txt, csv, pdf, jpg, png, gif, jpeg, css, html, js, md, php, py, rb, json, sh txt, csv, js, py, rb, sh, jpg, png, gif, jpeg, json txt, csv, pdf, jpg, png, gif, jpeg, css, html, js

## Google Gemini Vertex

txt, csv, pdf, jpg, png, gif, jpeg, css, html, js

- File Upload URL Requirements

Refer to the following table to determine if your AI provider requires a specific upload URL configuration.

AI API URL Vertex API Gemini API OpenAI API MS Azure API

## File Upload URL Required

## Sample URL

Not required: Documents included -- in the Agent are sent inline with the Agent prompt.

## Required

https://generativelanguage.googleapis.com/upload/v1beta/fil es

## Required

https://api.openai.com/v1/files

Error Handling The system displays the following message when a required configuration is missing:

## Scenario

## Message Displayed

File Upload URL is required but not populated File upload url is not configured for the AI model
- You need a Google Cloud Platform service account or Open AI account with appropriate permissions to use this functionality.
- If the AI API key is not configured correctly, the end user will see the following error message: API--1086: Missing or invalid configuration.
- If the configuration under "Vaia" is disabled, the end user will see the following error message: API--1019: Could not process the request due to internal error.
- If the attribute value is blank under the Vaia configuration, then the Configure action will not be available, and the "Generate with AI" button will not be displayed.
- The AI Agents tab replaces the legacy 'Enable AI' configuration. Status Report summaries are now managed as specific agents, allowing for custom data sources and prompts.
- Only one AI service can be specified as default.
- Starting with 16.4.1, Gemini supports API keys. You can now specify the model name (e.g., gemini-1.5-pro)
directly in the configuration, similar to OpenAI. Example of Gemini URL using Gemini 2.5 Pro https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5- pro:generateContent

Validate Your AI Model To ensure your AI service is actually communicating with Clarity before you roll it out to users, you should use the built-in validation tool.
This "Right-Click" validation performs a live test of your API credentials, endpoint URL, and model settings to catch errors like incorrect keys or exhausted tokens immediately. Steps to Validate Your AI Model
1. In Clarity, navigate to Administration, Vaia, AI Models.
2. Find the specific row for the AI service you just configured (e.g., OpenAI or Gemini).
3. Right-click anywhere on that row to open the context menu.
4. Click Validate Model.
A message appears.

- Success: A confirmation message will appear indicating a successful connection.
- Failure: Clarity will display the exact error message returned by the AI provider.

Generate Private Key for the Google's Vertex AI Service You will need a private key to create an integration object that helps you connect Clarity and your Google Vertex AI instance. Follow these steps:
1. Log into Google Cloud Platform's console as the service account owner.
2. Select IAM & Admin, Service Accounts, and navigate to the Keys tab.
3. Add a new key of the type "JSON". A new private key is generated and saved on your computer.

Get the Gemini AI API URL You need to have a service account in the Google Cloud Platform to leverage the Vaia service.
Ensure that the service account has the following access rights: - Vertex AI Service Agent - Service Account Token Creator Follow these steps: 1. Navigate to the following GCP Console URL within the GCP project.
https://console.cloud.google.com/vertex-ai/generative/language/create/text? authuser=0&orgonly=true&project=<project>&supportedpurview=project
2. ClickGET CODE.
3. Navigate to the CURL tab.
4. Copy the Post URL and replace the parameters with the correct endpoint, project ID, and location ID. Ensure you set
the model id as "gemini-pro".

1. Log into the Open AI platform.
2. Click your User Account and click View API Keys.
3. Click the Create New Secret Key and enter relevant details such as Name, Project, and Permissions. Save your
secret key, as you will not be able to view it again in Open AI. Get the Open AI API URL The Open AI API URL you need is https://api.openai.com/v1/chat/completions
1. Add a Custom Domain Name in Microsoft Azure (Optional)
2. Create Azure OpenAI Resource and Retrieve API Credentials
01. Add a Custom Domain Name in Microsoft Azure (Optional) A domain name is the web address people use to visit your site. A custom domain is one that you own and set up to point to your app in Azure, instead of using Azure's default address.

00000.
westus.azurewebsites.net - Custom domain: www.<yourcompanyname>.com Using a custom domain helps you: - Create a branded and easy-to-remember web address - Build trust and look more professional to your users - Control and protect how traffic reaches your app Step 1: Open Azure Active Directory
1. Log into the Azure Portal.
2. In the top search bar, type Azure Active Directory and select the service.
3. Ensure you are in the correct tenant. Step 2: Add a Custom Domain
1. In the left-hand menu, click Custom domain names.
2. Click Add custom domain on the right.
3. Enter the domain name and click Add domain. A domain can only be associated with one Azure tenant. If it's already in use, unlink it from the other tenant first. Step 3: Verify Domain Ownership
1. Sign in to your domain provider's portal.
2. Add a TXT record with:
3. Return to the Azure portal and click Verify. Step 4: Set as Primary Domain (Optional)
1. If this will be your primary domain, select Make primary after verification. Step 5: Confirm Domain Status
1. Return to Custom domain names and ensure the status is Verified. Refer to the App Service Documentation for more details.
02. Create Azure OpenAI Resource and Retrieve API Credentials Step 1: Open the Azure Portal
1. Go to the Azure Portal.
2. Sign in with your administrator or service account.
3. Search for Azure OpenAI and select it. Step 2: Create the Azure OpenAI Resource
1. Click Create Azure OpenAI.
2. Select a Resource Group or create a new one.
3. Choose a Region (For example: East US).
4. Enter a unique Name (For example: AzureOpenAIDemo).
5. Select a Pricing Tier (For example: Standard). Click Pricing Details for more info, then click Next.
6. On the Network tab:

## Related
- [[_MOC Vaia AI]]

%%Source: p2623-2629%%

