---
name: jira
description: Project Jira usage—board transitions after implementation or when a PR exists; creating issues with severity and work-type labels; use Atlassian/Jira or MCP and follow the reference instructions verbatim.
---

# Jira

Use this skill whenever work involves **Jira** in this project: a mapped issue (key in chat, branch, PR, or explicit reference), or **creating** an issue or task.

## Principles

1. **Keep Jira aligned with reality** when the user expects it: after local implementation/verification, and when a GitHub pull request exists for that issue—unless the user asked not to change Jira.
2. **Use the project’s tools**: Atlassian/Jira integration or MCP tools available in the workspace; pick the workflow transition or status that matches the **intended board column** for this project (names vary).
3. **Be explicit on failure**: say what you tried, paste errors if useful, and give the issue key plus target column so the user can move the issue manually.

## Reference instructions (follow verbatim)

Read and apply these files in full when they apply:

- `reference/jira-completion-in-progress.md` — after Cursor finishes implementation or verification for a mapped issue → **In Progress** (or equivalent).
- `reference/jira-pr-under-review.md` — when a PR exists for a mapped issue → **Under Review** / **In Review** (or equivalent).
- `reference/jira-task-labels.md` — when **creating** a Jira issue or task (severity and type-of-work labels).

Paths are relative to this skill directory: `.cursor/skills/jira/`.
