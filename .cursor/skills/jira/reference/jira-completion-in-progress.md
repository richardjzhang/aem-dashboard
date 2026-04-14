# Jira task completion: move issue to In Progress

When Cursor finishes implementation or verification for work that came from **a specific Jira issue** (linked ticket, issue key in the chat, branch name, or explicit user reference):

1. **Treat the issue as still needing board cleanup** unless the user said otherwise.
2. **Update Jira** so the issue lands in the **In Progress** column on the relevant board (use the project’s Atlassian/Jira integration or MCP tools available in this workspace).
3. **How to transition**: Prefer the transition that places the issue in the **In Progress** column. Board columns map to statuses differently per project—pick the status or workflow transition that results in **In Progress** for that board; if multiple boards exist, use the board the user or ticket context implies.
4. **If transition fails** (permissions, workflow, or unknown mapping): say what you tried, report the error, and give the exact issue key and target column so the user can move it manually.
5. **Skip** this step if the user explicitly asked not to change Jira state, or if no Jira issue was tied to the task.

```text
Example: Completed AEM-123 from Jira → after the code change is done, transition AEM-123
so it appears under the "In Progress" column.
```

If your team uses a different column name for the same meaning, adjust the column name in this rule file to match your board.
