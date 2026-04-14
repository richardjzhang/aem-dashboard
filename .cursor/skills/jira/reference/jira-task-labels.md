# Jira task and issue labels

When **creating** a Jira issue or task (including tickets created from chat, MCP, or manual steps you guide the user through):

## Severity

Always add a **severity** label (or the field your project uses for the same meaning) using one of:

- **Critical** — production down, security incident, or blocking work with no workaround.
- **Major** — significant impact or broken important flows; workaround may exist.
- **Minor** — small bug, polish, or low-impact follow-up.

Pick the single label that best matches impact. If the project uses different label names, map to the closest equivalent and note the mapping in the issue description if it helps the team.

## Type of work

Always add a **type of work** label (or component / issue type as appropriate) so work is classifiable—for example:

- Bug fix
- Feature / enhancement
- Technical debt / refactor
- Documentation
- Chore / tooling
- Investigation / spike

Use the label set your Jira project already defines when possible; if none fit, use the closest label and clarify in the description.

## Summary

Every new task should carry **both** a severity indicator and a work-type indicator so boards, filters, and reporting stay consistent.
