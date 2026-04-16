---
name: github-pr-ready-for-review
description: >-
  When the user explicitly asks to create or open a PR: ensure it is **Ready for review**, never **Draft**.
  For Jira-mapped work: branch names include the issue key, and after PR creation the issue moves to **In Review** per `.cursor/skills/jira/`.
  Do not load this skill to justify creating a PR—the user must ask for a PR first; see `.cursor/rules/pr-only-when-asked.mdc`.
---

# GitHub PR: always ready for review (never draft)

## Prerequisites

**Only create a PR when the user explicitly asked** to open, create, or file a pull request (see `.cursor/rules/pr-only-when-asked.mdc`). This skill governs **how** to open a PR once that request exists; it does **not** authorize opening a PR without it.

## Trigger

Apply this skill when **both** are true:

1. The user **explicitly** requested a PR (or is completing a flow they started to open one), and
2. You are **creating** that pull request (`gh pr create`, Cursor PR / review UI, or equivalent).

Then ensure the PR lands in a **reviewable** state—this repo does **not** use agent-opened **draft** PRs.

## Jira-linked work (this repo)

When the pull request maps to a **specific Jira issue** (key in chat, branch, or PR title/body):

1. **Branch name:** Create the branch with the issue key in the name (see `.cursor/skills/jira/reference/jira-pr-under-review.md`). Do not use a generic slug-only branch for mapped work.
2. **After the PR is created** (success from `gh pr create` or confirmed URL): **transition that Jira issue to In Review** / **Under Review** per `.cursor/skills/jira/` (Atlassian MCP: `transitionJiraIssue`), unless the user asked not to update Jira. GitHub does not do this automatically for you.
3. Apply the **ready-for-review** rules below so the PR is never left as a draft.

## Mandatory behavior

1. **Prefer the GitHub CLI** when the agent creates the PR so the mode is explicit:
   - Use `gh pr create` **without** the `--draft` flag (non-draft is the default; **never** add `--draft`).
   - Pass `--title` / `--body` / `--base` as required; still **omit** `--draft`.

2. **If the PR already exists and is a draft** (e.g. Cursor’s UI defaulted to draft, or a prior run used `--draft`):
   - Run `gh pr ready` for the current branch, or `gh pr ready <number>` if you know the PR number.
   - Confirm success from the command output (or open the PR URL and verify the **Ready for review** state).

3. **No draft PRs:** Do **not** open or keep a draft PR to mean “WIP” or “not ready yet.” If the user asks for a draft PR, follow this policy anyway: create or convert to **Ready for review** and explain briefly that this project expects reviewable PRs from agents.

## Cursor UI (local or Cloud)

- If the flow uses Cursor’s **built-in** PR composer and it offers a **Draft** checkbox or defaults to draft: **turn off draft** before submitting, **or** after creation run `gh pr ready` from the repo root so the PR is ready for review.
- Do not assume the UI default; **verify** the PR is not in draft.

## Why this exists

Draft PRs do not signal “ready for review” to many teams and automation. **All** PRs opened here—including by agents—must be **Ready for review**, not Draft.

## Quick reference

| Goal                         | Command / action                                      |
|-----------------------------|--------------------------------------------------------|
| Create PR, ready for review | `gh pr create` (no `--draft`)                         |
| Fix accidental draft        | `gh pr ready` (after `gh auth` is working for GitHub) |

Requires [`gh`](https://cli.github.com/) authenticated (`gh auth status`).
