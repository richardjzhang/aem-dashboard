---
name: github-pr-ready-for-review
description: >-
  Ensures GitHub pull requests opened from Cursor (Cloud or local) or via the
  agent are **Ready for review**, not **Draft** (unless the user asked for draft).
  For Jira-mapped work: branch names include the issue key, and after PR creation the issue moves
  to **In Review** per `.cursor/skills/jira/`. Use whenever creating a PR, pushing a branch for
  review, or the user asks to open a pull request.
---

# GitHub PR: ready for review (not draft)

## Trigger

Apply this skill whenever:

- The agent or user is **creating a GitHub pull request** (branch pushed, `gh pr create`, Cursor PR / review UI, or “open a PR”).
- Work is meant to be **reviewed**, not held as a private draft—unless the user **explicitly** asked for a draft PR.

## Jira-linked work (this repo)

When the pull request maps to a **specific Jira issue** (key in chat, branch, or PR title/body):

1. **Branch name:** Create the branch with the issue key in the name (see `.cursor/skills/jira/reference/jira-pr-under-review.md`). Do not use a generic slug-only branch for mapped work.
2. **After the PR is created** (success from `gh pr create` or confirmed URL): **transition that Jira issue to In Review** / **Under Review** per `.cursor/skills/jira/` (Atlassian MCP: `transitionJiraIssue`), unless the user asked not to update Jira. GitHub does not do this automatically for you.
3. Then apply the **draft vs ready** rules below. (If the user asked for a **draft** PR, still transition Jira to In Review unless they asked to hold Jira too.)

## Mandatory behavior

1. **Prefer the GitHub CLI** when the agent creates the PR so the mode is explicit:
   - Use `gh pr create` **without** the `--draft` flag (non-draft is the default; do not add `--draft`).
   - If you need to be explicit, you can pass `--title` / `--body` / `--base` as required; still **omit** `--draft`.

2. **If the PR already exists and is a draft** (e.g. Cursor’s UI defaulted to draft, or a prior run used `--draft`):
   - Run `gh pr ready` for the current branch, or `gh pr ready <number>` if you know the PR number.
   - Confirm success from the command output (or open the PR URL and verify the **Ready for review** state).

3. **If the user explicitly wants a draft PR** (they said “draft”, “WIP”, or “don’t request review yet”):
   - Only then use `gh pr create --draft` or leave the PR as draft; do **not** run `gh pr ready`.

## Cursor UI (local or Cloud)

- If the flow uses Cursor’s **built-in** PR composer and it offers a **Draft** checkbox or defaults to draft: **turn off draft** before submitting, **or** after creation run `gh pr ready` from the repo root so the PR is ready for review.
- Do not assume the UI default; **verify** the PR is not in draft when the goal is review.

## Why this exists

Draft PRs do not signal “ready for review” to many teams and automation. This project expects PRs from Cursor agents to be **review-ready** unless the user opts into a draft.

## Quick reference

| Goal                         | Command / action                                      |
|-----------------------------|--------------------------------------------------------|
| Create PR, ready for review | `gh pr create` (no `--draft`)                         |
| Fix accidental draft        | `gh pr ready` (after `gh auth` is working for GitHub) |

Requires [`gh`](https://cli.github.com/) authenticated (`gh auth status`).
