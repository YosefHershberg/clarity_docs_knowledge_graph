---
title: Global Search
tags:
  - howto
aliases:
  - Search
  - Global Search Beta
  - Clarity Search
  - Find Records
---

# Global Search (Beta)

The **Global Search** feature in Clarity PPM 16.4.1 provides a unified search experience across all record types in the system. It is currently labeled as **Beta**, meaning it is actively being developed and improved. Global Search allows you to quickly find projects, investments, resources, tasks, and other records without navigating to their specific sections.

%%Source: p308-309%%

---

## Accessing Global Search

- Click the **magnifying glass icon** in the top navigation bar (top-right area).
- Or use the keyboard shortcut: **Ctrl+K** (Windows/Linux) / **Cmd+K** (Mac) — where available.
- The global search bar expands or a search modal opens.

> [!note] Beta Feature
> Global Search is marked as Beta in Clarity 16.4.1. This means the feature is functional but may have performance limitations or missing record types compared to the planned final version. Broadcom is actively expanding coverage.

---

## How to Search

1. Click the **search icon** or use the keyboard shortcut.
2. Type your search term in the search box.
3. Results appear as you type (type-ahead / instant search).
4. Click a result to navigate directly to that record.

---

## What Can Be Searched

| Record Type | Searchable Fields |
|-------------|------------------|
| **Projects** | Name, ID, Manager name |
| **Investments** | Name, ID, Owner name |
| **Ideas** | Name, ID |
| **Resources / Users** | Name, email, employee ID |
| **Tasks** | Task name (within projects) |
| **Roadmaps** | Name |
| **Pages** | Page name |

> [!warning] Beta Coverage Limitation
> Not all record types may appear in Global Search results in the Beta version. Some object types (custom objects, certain financial records) may require navigating directly to their respective sections using the left navigation bar.

---

## Search Results Display

Search results are grouped by **record type** for clarity:

```
Search results for "alpha"

PROJECTS (3)
  ▸ Project Alpha        — Active | J. Smith
  ▸ Alpha Roadmap Init   — Planned | M. Jones
  ▸ Alpha Platform v2    — Active | A. Davis

RESOURCES (1)
  ▸ Alpha, James         — Resource | Engineering

IDEAS (2)
  ▸ Alpha Commerce Portal — Proposed
  ▸ Project Alpha Redux   — Evaluated
```

- Each result shows the **record name**, **type badge**, and key identifiers (status, manager/owner).
- Click any result to open it.

---

## Search Tips

> [!tip] Use Partial Names
> You do not need to type the full name — partial matches work. Typing "alph" will return all records with "alph" in their name.

> [!tip] Search by ID
> If you know the Clarity record ID (e.g., a project ID like "PRJ-1042"), you can type it directly to navigate to that specific record.

> [!tip] Case Insensitive
> Global Search is case-insensitive — "Alpha", "alpha", and "ALPHA" return the same results.

---

## Limitations (Beta)

- **No advanced filtering** — You cannot add field-level filter conditions within Global Search. For filtered lists, use the grid with [[Common Components/Filters|Filters]].
- **No full-text content search** — Searches match record names and identifiers, not free-text field content (e.g., description text).
- **Performance at scale** — Very large datasets may experience slight delays in results loading.
- **Limited to accessible records** — Results respect your access rights. You will not see records you do not have permission to view.

---

## Comparing Global Search vs. Grid Filters

| Need | Use |
|------|-----|
| Find a specific record by name quickly | **Global Search** |
| Browse all records of a type with conditions | **Grid + Filters** |
| Filter by multiple field values | **Grid + Filters** |
| Find a resource by name | **Global Search** |
| Find all projects in a department | **Grid + Filters** |

---

## Related Notes

- [[Common Components/Filters]] — Applying detailed filters within a grid
- [[Common Components/Grids]] — Browsing records with full filtering and sorting
- [[First Time Login]] — Navigation overview including the search bar
