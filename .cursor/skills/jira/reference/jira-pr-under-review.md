# Jira: PR opened → In Review / Under Review

When a **GitHub pull request exists** for work that maps to a **specific Jira issue**, **sync Jira** once the PR is confirmed (URL or number). That includes PRs the **agent** opens **only after** the user explicitly asked for a PR (see `.cursor/rules/pr-only-when-asked.mdc`—the agent does not open PRs on its own).

## Branch names (mandatory for agent-created branches)

Branches for Jira-mapped work **must** contain the issue key so Git, GitHub, and humans stay aligned.

- **Pattern:** `{optional-prefix/}{ISSUE-KEY}-{short-slug}`
- **Examples:** `cursor/KAN-71-migrate-sidebar`, `feature/AEM-456-fix-login`
- **Prefixes:** If the user or repo convention requires a prefix (e.g. `cursor/`), put it **before** the issue key: `cursor/KAN-71-description`, not `KAN-71/cursor-description`.

If you already created a branch **without** the key, fix forward: rename/recreate the branch with the key before opening the PR when possible, or at minimum put the issue key in the **PR title** and **body** and still transition Jira.

## After the PR exists

1. **Update Jira** so the issue lands in **In Review** / **Under Review** (or the workflow status your board uses for that column—e.g. "Code Review"). Use the Atlassian MCP in this workspace (`getTransitionsForJiraIssue` → `transitionJiraIssue` with `cloudId` from `getAccessibleAtlassianResources`) or another integration the user relies on.
2. **Order of operations:** Create branch (with issue key) → commit → push → **create PR** (when the user asked for a PR) → **then transition Jira**. Do not assume GitHub notifies Jira; the agent must perform the transition unless the user said not to change Jira.
3. **How to transition**: Pick the transition or status that matches the **review** column on the relevant board; names vary by project.
4. **If transition fails** (permissions, workflow, or unknown mapping): describe what you tried, report the error, and give the issue key plus target column so the user can move it manually.
5. **Skip** if the user asked not to change Jira state, or if no Jira issue is tied to the PR/task.

```text
Example: Opened PR for branch cursor/KAN-71-migrate-components → transition KAN-71 to In Review
after the PR exists (link in chat or confirmed creation).
```

**Note:** When **no** PR exists yet, follow **`reference/jira-completion-in-progress.md`** (In Progress). Once a PR exists for the issue, this doc takes precedence: sync **In Review** / **Under Review**, not only In Progress.
