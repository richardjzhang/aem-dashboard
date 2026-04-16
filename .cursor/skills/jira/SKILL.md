---
name: jira
description: >-
  Atlassian Jira for this repo: issue keys (e.g. KAN-71, PROJECT-123), tickets, board status,
  workflow transitions (In Progress, In Review, Under Review), linking PRs to issues, JQL search,
  assignee, sprint, GitHub branch names with issue keys, and Atlassian MCP (cloudId,
  searchJiraIssuesUsingJql, transitionJiraIssue, getJiraIssue, createJiraIssue). After implementing
  or verifying work from a mapped issue, sync Jira per reference/jira-completion-in-progress.md;
  when a PR is created (including via GitHub), move the issue to In Review per
  reference/jira-pr-under-review.md. Creating issues: reference/jira-task-labels.md. Never move to
  Done, Closed, or Complete unless the user explicitly asked to close or complete that issue.
---

# Jira

**Load this skill** when the conversation involves any of: **Jira**, **Atlassian**, an **issue key** (`PROJECT-123`), a **ticket** tied to dev work, **Jira MCP** tools, **JQL**, **branch/PR titles** with issue keys, **board** or **workflow** updates, or **creating** an issue/task.

Use this skill whenever work involves **Jira** in this project: a mapped issue (key in chat, branch, PR, or explicit reference), or **creating** an issue or task.

## Non-negotiable (workflow)

1. **Do not** transition a mapped issue to **Done**, **Closed**, **Complete**, or any terminal “finished” status **unless the user explicitly asks** to close or complete that issue (e.g. “mark KAN-71 Done”, “close the ticket”, “transition to Done after merge”).
2. **After implementation or verification** for a mapped issue (no explicit “mark Done” instruction): update Jira so the issue is **In Progress** (or equivalent active work state), per `reference/jira-completion-in-progress.md`. If it is already In Progress, you may leave it or re-apply the same transition only if needed to sync state—**do not** advance to Done.
3. **When a pull request exists** for the issue—including when **you** create it via GitHub (`gh pr create`, push + PR flow, Cursor PR UI)—**update Jira** so the issue is **In Review** / **Under Review** (or the workflow status that matches that column on the board) per `reference/jira-pr-under-review.md`, not Done, unless the user asked otherwise. **Do not** skip this step for “agent-opened” PRs; GitHub does not update Jira automatically unless you use MCP or another integration the user configured.
4. **Branch names for Jira-mapped work**: Any **new** branch you create for work tied to a specific issue **must** include that issue’s key in the branch name (after any required prefix such as `cursor/`). Example: `cursor/KAN-71-migrate-sidebar`, not `cursor/migrate-sidebar`. See `reference/jira-pr-under-review.md` for pattern and PR-title/body reminders.

If you are unsure whether the user wants the ticket closed, **leave it in In Progress** (or In Review when a PR exists) and ask.

## Principles

1. **Keep Jira aligned with reality** when the user expects it: after local implementation/verification, and **immediately after** creating or confirming a GitHub pull request for that issue—unless the user asked not to change Jira.
2. **Use the project’s tools**: Atlassian/Jira integration or MCP tools available in the workspace; pick the workflow transition or status that matches the **intended board column** for this project (names vary).
3. **Be explicit on failure**: say what you tried, paste errors if useful, and give the issue key plus target column so the user can move the issue manually.

## Reference instructions (follow verbatim)

Read and apply these files in full when they apply:

- `reference/jira-completion-in-progress.md` — after Cursor finishes implementation or verification for a mapped issue → **In Progress** (or equivalent). **Overrides any impulse to mark Done.**
- `reference/jira-pr-under-review.md` — when a PR exists for a mapped issue → **Under Review** / **In Review** (or equivalent).
- `reference/jira-task-labels.md` — when **creating** a Jira issue or task (severity and type-of-work labels).

Paths are relative to this skill directory: `.cursor/skills/jira/`.
