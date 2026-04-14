---
title: Project Templates (Classic PPM)
tags:
  - classic
  - howto
source_pages: 2273-2277
canonical: true
audience: everyone
domain: classic
---
# Create Projects from Project Templates (Classic PPM)

Project templates help with consistency and efficiency in project creation. Use a template to copy standard task and role assignments, WBS, financial plans, and documents into a new project instead of building from scratch. You can also scale work estimates and budgets by a specified percentage.

## Designate a Project as a Template

Before designating a project as a template, verify:
- The project contains no time entries with a value greater than zero
- The project is financially closed
- The project is not associated with transactions (posted or not)

### Steps

1. Open the project
2. Select the **Template** check box (Default: Cleared)
3. Save changes

## Populate a New Project from a Template

1. Open the project
2. Open the **Actions** menu > **Copy Project from Template**
3. Select a project template and click **Next**
4. Complete the following fields:
   - **Template Name** — The template being copied (display-only)
   - **Scale Work By** — Percentage to increase/decrease task work estimates relative to the template (Values: 0-100, Default: 0 = no change)
   - **Scale Budget By** — Percentage to scale dollar amounts in cost plans and benefit plans (Values: positive or negative, Default: 0 = no change)
     - *Example:* Scale Budget By 20% on a $10,000 planned cost results in $12,000 in the new project
   - **Convert resources to roles** — Replace named resources with their primary or team roles on the new project (Default: Cleared)
5. Click **Copy**

> [!TIP]
> When you copy from a template in Classic PPM, project links, project banner color, and task to-do items are also copied.

## Using Project Templates with Processes

Project templates can have associated processes. For staff and WBS to copy over to the new project via a template process, include these system actions in the process:

- **Copy WBS from Template** — Copies WBS tasks and assigned staff (staff must be assigned to WBS tasks)
- **Copy Staff from Template** — Copies all staff from the template regardless of whether they are assigned to WBS tasks

## Rules for Copying Financial Plans from Templates

- The entity associated with the template must match the entity of the new project
- Financial plan IDs from the template must not match existing plan IDs in the new project (if they do, the ID is suffixed)
- If both the target project and the template have a cost plan POR, the target project retains its own POR; the template POR is copied as a non-POR cost plan
- No active processes can be running on the template
- The template cannot include submitted, approved, or rejected budget plans

### How Financial Plan Dates Shift

Financial plan start dates shift based on the difference between the template project start date and the new project start date, while maintaining the same time lapse between plan start and end.

**Example:**
- Template start date: December 2020
- New project start date: December 2021
- Cost Plan A in template: January 2021 – December 2022
- Cost Plan A in new project: January 2022 – December 2023 (shifted by 12 months)

### Department Matching Rules for Financial Plans

| Condition | Result |
|-----------|--------|
| Department OBS defined in template | Copied to new project |
| New project uses same or different department from same entity | Financial plans copy |
| New project uses department from different entity | Financial plans do not copy (budget properties still copy) |

## Related Notes

- [[Financial Enablement]] — Financially enable projects
- [[Subprojects]] — Create subprojects from templates
- [[Projects Teams Tasks]] — General project creation
- [[_MOC Classic PPM]]
