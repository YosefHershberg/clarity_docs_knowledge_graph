# Clarity 16.4.1 Knowledge Graph - AI Agent Navigation Guide

## Purpose
This Obsidian vault is a comprehensive knowledge graph of Broadcom Clarity PPM 16.4.1 documentation. It serves as a learning resource covering all roles: Project Manager, System Administrator, Developer/Integrator, and end users. Source: official Clarity 16.4.1 documentation PDF (3332 pages).

## Vault Structure

The vault uses **numbered folders** (`01` - `22`) sorted by learning priority. Each folder has a **MOC (Map of Content)** file prefixed with `_MOC` that serves as the entry point for that section.

### Folder Map




| Folder | Domain | Audience |
|--------|--------|----------|
| `01 - Getting Started/` | First login, UI components, personas | Everyone |
| `02 - Investments/` | Custom Investments, Ideas, Team Investments | PM, PPM Admin |
| `03 - Projects/` | Project lifecycle, tasks, staffing, financials | PM |
| `04 - Roadmaps/` | Top-down planning, timeline/board/grid views | PM, Leadership |
| `05 - Hierarchies/` | Investment hierarchies, objectives, cross-object analysis | PM, Leadership |
| `06 - Resource Management/` | Staffing, allocations, scenarios, people planning | RM, PM |
| `07 - Financial Management/` | Cost/budget/benefit plans, GL, chargebacks | Finance, PM |
| `08 - Timesheets/` | Time entry, approval, grid management | Everyone |
| `09 - Collaboration/` | Workflows, action items, conversations, agreements | Everyone |
| `10 - Pages and Objectives/` | Custom pages, OKRs, plans (beta) | PM, Admin |
| `11 - Reporting/` | Report Designer, data providers, exports | PM, Admin |
| `12 - Administration/` | Blueprints, security, system settings, DWH, processes | Admin |
| `13 - Classic PPM/` | Legacy UI: projects, portfolios, demand, ITSM | Legacy Users |
| `14 - Vaia AI/` | AI assistants, summarization, data generation | Everyone |
| `15 - Mobile App/` | Mobile timesheets, approvals, action items | Mobile Users |
| `16 - Development/` | REST API, Studio, XOG, GEL, custom objects | Developer |
| `17 - Installation and Upgrade/` | Install (Oracle/SQL/Postgres), upgrade, OData | Admin, DevOps |
| `18 - Advanced Reporting/` | Jaspersoft, Ad Hoc views, PMO reports | Admin, Analyst |
| `19 - Add-Ins and Integrations/` | APM, PMO Accelerator, Rally, SSO | Admin, Developer |
| `20 - Cookbooks/` | Step-by-step recipes: roadmaps, OKRs, programs | PM |
| `21 - Reference/` | Access rights, jobs, portlets, glossary | Everyone |
| `22 - Release Info/` | Release notes, compatibility, accessibility | Admin |
| `23 - Source Documentation/` | Raw PDF extraction (NOT for retrieval — development reference only) | Internal |
| `Tags and Concepts/` | Cross-cutting concept notes (Canvas, OBS, etc.) | Everyone |

## How to Navigate

### Starting Point
Open `[[00 - Home]]` — the master MOC linking to all sections.

### Finding Information by Topic
1. Open the relevant **numbered folder** from the table above
2. Read the **`_MOC` file** inside it for an overview and links to all notes in that section
3. Follow **wikilinks** (`[[Note Name]]`) to drill into specific topics

### Finding Information by Role
- **Project Manager**: Start with `01`, `02`, `03`, `04`, `05`, `20`
- **Resource Manager**: Start with `06`, `08`
- **Financial Analyst**: Start with `07`
- **System Administrator**: Start with `12`, `17`, `18`, `22`
- **Developer**: Start with `16`, `19`
- **New User**: Start with `01`, then `03`, then `08`

### Finding Information by Keyword
- Use Obsidian's global search (`Ctrl+Shift+F`) or the Grep tool
- Check `[[Glossary]]` in `21 - Reference/` for Clarity-specific terms
- Browse `Tags and Concepts/` for cross-cutting topics

### Tag Taxonomy
Notes use these tag prefixes:
- `#concept` — Core Clarity concepts (investments, OBS, blueprints)
- `#howto` — Step-by-step procedures
- `#admin` — Administration and configuration
- `#dev` — Development and integration
- `#reference` — Lookup tables, access rights, job definitions
- `#classic` — Classic PPM (legacy) content
- `#saas` — SaaS-specific content
- `#onprem` — On-premise-specific content

## For AI Agents

### Retrieval Scope
- **ONLY retrieve from folders `01` through `22` and `Tags and Concepts/`** — these are curated, canonical notes.
- **NEVER retrieve from `23 - Source Documentation/`** — this folder contains raw PDF extractions used only for building the knowledge graph. It is not optimized for retrieval and will waste tokens.
- Notes with `canonical: true` in frontmatter are the authoritative source. If a curated note and a source doc cover the same topic, always prefer the curated note.

### Frontmatter Filtering
Each curated note includes structured frontmatter for filtering:
- `audience` — target roles: `everyone`, `pm`, `rm`, `finance`, `admin`, `dev`, `leadership`
- `domain` — feature area: `ui`, `investments`, `projects`, `roadmaps`, `hierarchies`, `resources`, `financials`, `timesheets`, `collaboration`, `reporting`, `administration`, `classic`, `ai`, `mobile`, `development`, `installation`, `integrations`, `reference`
- `canonical: true` — marks this as the authoritative note for its topic

### Answering User Questions
1. Start at `[[00 - Home]]` to identify the relevant section
2. Open the section's `_MOC` file to find the specific topic
3. Read the topic note for detailed content
4. Follow wikilinks to related notes for additional context
5. Check `Tags and Concepts/` for cross-cutting concepts

### Common Patterns
- **"How do I..."** questions → look for `#howto` tagged notes
- **"What is..."** questions → check `21 - Reference/Glossary.md` then the relevant section
- **Configuration questions** → `12 - Administration/`
- **API/integration questions** → `16 - Development/`
- **"Where is the setting for..."** → `12 - Administration/System Settings.md` or the relevant Blueprint note

### Source Reference
All content is extracted from: `Clarity-16-4-1.pdf` (Broadcom Clarity PPM 16.4.1 official documentation). Page numbers from the source PDF are noted in notes where applicable.
