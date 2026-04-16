---
name: jira
description: >-
  Atlassian Jira for this repo: issue keys, tickets, board status,
  workflow transitions (In Progress, In Review, Under Review), linking PRs to issues, JQL search,
  assignee, sprint, GitHub branch names with issue keys, and Atlassian MCP (cloudId,
  searchJiraIssuesUsingJql, transitionJiraIssue, getJiraIssue, createJiraIssue). After implementing
  or verifying work from a mapped issue, sync Jira: In Review when a PR exists for that issue
  (user-opened or opened by the agent after an explicit PR request), otherwise In Progress—see reference/jira-completion-in-progress.md
  and reference/jira-pr-under-review.md. Creating issues: reference/jira-task-labels.md. Transition
  to Done, Closed, or Complete only when the user explicitly asks to close or complete that issue.
---

# Jira

**Load this skill** when the conversation involves any of: **Jira**, **Atlassian**, an **issue key** (`PROJECT-123`), a **ticket** tied to dev work, **Jira MCP** tools, **JQL**, **branch/PR titles** with issue keys, **board** or **workflow** updates, or **creating** an issue/task.

Use this skill whenever work involves **Jira** in this project: a mapped issue (key in chat, branch, PR, or explicit reference), or **creating** an issue or task.

## Non-negotiable (workflow)

1. **Pull requests:** Do **not** create a GitHub pull request unless the user **explicitly** asked to open or create one (see `.cursor/rules/pr-only-when-asked.mdc`). Jira **In Review** applies when a PR **exists** (opened by the user or by you **after** an explicit PR request)—not because you opened a PR on your own.
2. **Always** sync Jira after implementation or verification for a mapped issue so the board matches reality: **In Review** / **Under Review** (or equivalent) **if a pull request exists** for that issue—including when **you** create it **because the user asked for a PR**—per `reference/jira-pr-under-review.md`. **Otherwise** (no PR yet), transition to **In Progress** (or equivalent active work state) per `reference/jira-completion-in-progress.md`. The PR case takes precedence: do not leave the issue only in In Progress when a PR for it already exists.
3. **Do not** treat **Done**, **Closed**, **Complete**, or any terminal “finished” status as the automatic outcome of finishing agent work. Use step 2’s targets unless the user **explicitly** asks to close or complete the issue (e.g. “mark KAN-71 Done”, “close the ticket”).
4. **Branch names for Jira-mapped work**: Any **new** branch you create for work tied to a specific issue **must** include that issue’s key in the branch name (after any required prefix such as `cursor/`). Example: `cursor/KAN-71-migrate-sidebar`, not `cursor/migrate-sidebar`. See `reference/jira-pr-under-review.md` for pattern and PR-title/body reminders.

If you are unsure whether the user wants the ticket closed, **leave it** at In Progress or In Review (per steps above) and ask.

## Principles

1. **Keep Jira aligned with reality** when the user expects it: after local implementation/verification, and **immediately after** a pull request exists for that issue (including one you create **because the user asked for a PR**)—unless the user asked not to change Jira.
2. **Use the project’s tools**: Atlassian/Jira integration or MCP tools available in the workspace; pick the workflow transition or status that matches the **intended board column** for this project (names vary).
3. **Be explicit on failure**: say what you tried, paste errors if useful, and give the issue key plus target column so the user can move the issue manually.

## Reference instructions (follow verbatim)

Read and apply these files in full when they apply:

- `reference/jira-completion-in-progress.md` — after Cursor finishes implementation or verification **and there is no PR** for the mapped issue → **In Progress** (or equivalent).
- `reference/jira-pr-under-review.md` — when a **PR exists** for the mapped issue (including agent-opened PRs) → **In Review** / **Under Review** (or equivalent). Use this instead of the completion-in-progress path when both could apply.
- `reference/jira-task-labels.md` — when **creating** a Jira issue or task (severity and type-of-work labels).

Paths are relative to this skill directory: `.cursor/skills/jira/`.
