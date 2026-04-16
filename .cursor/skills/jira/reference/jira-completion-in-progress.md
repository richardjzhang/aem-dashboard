# Jira task completion: move issue to In Progress

When Cursor finishes implementation or verification for work that came from **a specific Jira issue** (linked ticket, issue key in the chat, branch name, or explicit user reference):

## If a pull request exists (or you just opened one)

Use **`reference/jira-pr-under-review.md`** instead: transition the issue to **In Review** / **Under Review** (or equivalent). That is the correct sync when a PR is part of the outcome—**do not** apply only In Progress in that situation.

## If there is no PR yet

1. **Update Jira** so the issue lands in the **In Progress** column on the relevant board (use the project’s Atlassian/Jira integration or MCP tools available in this workspace).
2. **How to transition**: Prefer the transition that places the issue in the **In Progress** column. Board columns map to statuses differently per project—pick the status or workflow transition that results in **In Progress** for that board; if multiple boards exist, use the board the user or ticket context implies.
3. **If transition fails** (permissions, workflow, or unknown mapping): say what you tried, report the error, and give the exact issue key and target column so the user can move it manually.
4. **Skip** this step if the user explicitly asked not to change Jira state, or if no Jira issue was tied to the task.

```text
Example: Completed AEM-123 from Jira locally with no PR yet → transition AEM-123 so it appears
under the "In Progress" column.
```

If your team uses a different column name for the same meaning, adjust the column name in this rule file to match your board.

## Terminal statuses (Done / Closed)

Do **not** move the issue to **Done**, **Closed**, or equivalent terminal status as the default follow-up to agent work. That requires an **explicit** user request to close or complete the ticket (see the main `SKILL.md` non-negotiable rules).
