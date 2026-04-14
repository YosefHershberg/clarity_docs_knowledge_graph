---
title: Data Generation, Revision, and Review
tags:
  - howto
  - concept
aliases:
  - Data Generation
  - Data Review
canonical: true
audience: everyone
domain: ai
---
# Data Generation, Revision, and Review

Vaia enables AI-driven data generation, revision, and review through configurable AI agents. These agents can generate new content, revise existing content, or analyze and review content — all directly within Clarity attributes.

| Action Mode | Primary Result |
|---|---|
| **Generate** | Populates an empty or existing field with new AI-created data |
| **Revise** | Updates and replaces existing field content based on new instructions |
| **Review** | Analyzes existing content and provides insights without modifying stored data |

---

## Data Generation

AI agents configured for data generation populate a target attribute with new AI-created content.

**Agent Configuration (administrator):**
- Type: Object where the attribute exists
- Context: Attribute
- Output Location: **Text Field**
- Attribute: Target attribute for content generation
- Additional context: attributes, metadata, data sources (CSV reports), files

**To generate content:**

1. Navigate to the relevant object in Clarity.
2. Locate the AI-enabled attribute.
3. Click **Vaia** and select **Generate**.
4. Review the generated content, which automatically populates the attribute.

> [!NOTE]
> When output location is **Text Field**, follow-up prompts are not supported. The AI response is written directly to the attribute.

---

## Data Revision

AI agents configured for data revision update and replace existing attribute content based on new instructions.

**Agent Configuration (administrator):**
- Type: Object where the attribute exists
- Context: Attribute
- Output Location: **Text Field**
- Attribute: Target attribute for content revision

**To revise content:**

1. Navigate to the relevant object in Clarity.
2. Locate the AI-enabled attribute with existing content.
3. Click **Vaia** and select **Revise**.
4. Review the revised content, which replaces the existing attribute value.

> [!NOTE]
> Follow-up prompts are not available when the output location is Text Field.

---

## Data Review

Vaia supports **AI-driven data review** that analyzes existing content and provides insights **without modifying stored data**. The analysis is delivered to a **Chat Panel**, allowing interactive follow-up.

**Agent Configuration (administrator):**
- Type: Object where the attribute exists
- Context: Attribute
- Output Location: **Chat Panel**
- Attribute: The attribute being reviewed

**To run Data Review:**

1. Navigate to the relevant object in Clarity.
2. Locate the AI-enabled attribute.
3. Click **Vaia** and select **Review**.
4. View the analysis in the **chat panel**. The original attribute content remains **unchanged**.

### Conversational Review and Follow-Up

When output is set to **Chat Panel**:
- Users can ask **follow-up questions** after the initial review.
- The AI retains **conversational context** within the session.
- Users can refine, clarify, or probe the analysis before taking action.

> [!TIP]
> This interactive capability is the key differentiator between Review (Chat Panel) and Generate/Revise (Text Field). Use Review when you want to explore insights before committing changes.

### Reviewing Multiple Data Sources

To enrich the review with additional context:
- Use the **"+"** option in the chat panel to reference additional files.
- The AI can **compare or correlate** the attribute content with the added files.
- Enables **cross-document validation**, consistency checks, and impact analysis.

---

## Roadmap Summary Generation

Roadmap Summary Generation is an example of AI-driven content generation.

**Prerequisites:**
- Created a custom roadmap-based report (query-based or object-based data provider).
- Published the custom roadmap report.

**Configuration steps:**

1. Navigate to **Clarity Administration** > **AI Agents**.
2. Open the **Generate Roadmap Summary** agent.
3. Select **Add Data Source from CSV** and add the custom roadmap report.
4. Select the key attribute (e.g., Roadmap ID).
5. Enable the **Generate Roadmap Summary** agent.

Once enabled and configured, run the agent from the Roadmap to generate the summary in the **Roadmap Chat panel**.

---

## Status Report Summary (Example)

Status Report Summary is a common example of AI-driven data generation and revision.
- Preconfigured **Generate** and **Revise** agents are available for status narrative attributes.
- These agents use a CSV-based data source from an out-of-the-box report pulling relevant artifacts.
- Users can customize the data by copying the default status summary report and modifying the query-based data provider (e.g., adding or removing artifacts like issues from the summary).

---

> [!NOTE]
> For branding the AI assistant name and logo, see [[Setup and Configure]].

## Related
- [[_MOC Vaia AI]]
- [[AI Agents]]
- [[Setup and Configure]]

%%Source: p2644-2645, p2554-2582%%

