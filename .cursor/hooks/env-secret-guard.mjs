#!/usr/bin/env node
// IMPORTANT: This file contains critical hooks.
// DO NOT MODIFY EXISTING HOOK IMPLEMENTATIONS.
// You may only add new exports or internal helpers if explicitly requested.
//
// Cursor hook: Environment secret guard (enforced)
//
// Lifecycle coverage:
//   - beforeReadFile:       denies agent reads of secret-bearing paths
//   - beforeShellExecution: denies shell commands that reference those paths
//   - beforeMCPExecution:   denies MCP tools whose arguments reference those paths
//   - beforeSubmitPrompt:   blocks prompt if it contains secret file content (cannot inject context)
//
// Response schemas follow the official Cursor Hooks spec:
//   https://cursor.com/docs/hooks
//
import { readFileSync } from "node:fs";
import { normalize } from "node:path";

// ---------------------------------------------------------------------------
// Secret file detection
// ---------------------------------------------------------------------------

const SECRET_PATTERNS = [
  /^\.env$/,
  /^\.env\..+/,
  /^credentials\.json$/i,
  /^secrets\.json$/i,
  /^\.secret$/,
  /^service[-_]?account.*\.json$/i,
  /^.*\.pem$/,
  /^.*\.key$/,
];

function isSecretFile(name) {
  return SECRET_PATTERNS.some((re) => re.test(name));
}

function filePathIsSecret(filePath) {
  if (!filePath || typeof filePath !== "string") return false;
  const norm = normalize(String(filePath).replace(/\\/g, "/"));
  const segments = norm.split("/").filter(Boolean);
  for (const seg of segments) {
    if (isSecretFile(seg)) return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Shell / MCP argument scanning
// ---------------------------------------------------------------------------

/** Split a shell string into rough tokens (good enough for path checks). */
function shellTokens(command) {
  if (!command || typeof command !== "string") return [];
  const out = [];
  const re = /[^\s"'`]+|"[^"]*"|'[^']*'/g;
  let m;
  while ((m = re.exec(command)) !== null) {
    let t = m[0];
    if (
      (t.startsWith('"') && t.endsWith('"')) ||
      (t.startsWith("'") && t.endsWith("'"))
    ) {
      t = t.slice(1, -1);
    }
    out.push(t);
  }
  return out;
}

function tokenTouchesSecrets(token) {
  if (!token || typeof token !== "string") return false;
  const t = token.replace(/\\/g, "/");
  if (filePathIsSecret(t)) return true;
  const parts = t.split(/[/:]/);
  for (const p of parts) {
    if (p && isSecretFile(p)) return true;
  }
  return false;
}

function shellCommandTouchesSecrets(command) {
  for (const token of shellTokens(command)) {
    if (tokenTouchesSecrets(token)) return true;
  }
  // Redirection / inline paths: <.env, 2>.env.local
  const pathLike =
    /(?:^|[\s;=<>|&()[\]{},])(['"]?)([^\s'"|&;<>()]+)\1(?=[\s|;)&<>]|$)/g;
  let m;
  while ((m = pathLike.exec(command)) !== null) {
    if (tokenTouchesSecrets(m[2])) return true;
  }
  return false;
}

function mcpArgsTouchSecrets(value, seen = new Set()) {
  if (value == null) return false;
  if (typeof value === "string") {
    return tokenTouchesSecrets(value) || filePathIsSecret(value);
  }
  if (typeof value !== "object") return false;
  if (seen.has(value)) return false;
  seen.add(value);
  if (Array.isArray(value)) {
    return value.some((v) => mcpArgsTouchSecrets(v, seen));
  }
  return Object.values(value).some((v) => mcpArgsTouchSecrets(v, seen));
}

// ---------------------------------------------------------------------------
// Output helper
// ---------------------------------------------------------------------------

function emit(obj) {
  process.stdout.write(JSON.stringify(obj) + "\n");
}

// ---------------------------------------------------------------------------
// Hook handlers — response shapes match the official Cursor spec
// ---------------------------------------------------------------------------

/**
 * beforeReadFile
 *
 * Spec output: { permission: "allow" | "deny", user_message?: string }
 * Note: agentMessage / agent_message is NOT supported for this hook.
 */
function handleBeforeReadFile(input) {
  const path = input.file_path;
  if (!filePathIsSecret(path)) {
    emit({ permission: "allow" });
    return;
  }
  emit({
    permission: "deny",
    user_message:
      "Blocked: this file may contain secrets (env-secret-guard hook).",
  });
}

/**
 * beforeShellExecution
 *
 * Spec output: { permission: "allow" | "deny" | "ask",
 *                user_message?: string, agent_message?: string }
 */
function handleBeforeShellExecution(input) {
  const cmd = input.command;
  if (!shellCommandTouchesSecrets(cmd)) {
    emit({ permission: "allow" });
    return;
  }
  emit({
    permission: "deny",
    user_message:
      "Blocked: command references a file that may contain secrets (env-secret-guard hook).",
    agent_message:
      "This command was blocked by the env-secret-guard hook because it references " +
      "a path matching secret file patterns (.env, credentials.json, *.pem, *.key, etc). " +
      "Do not attempt to read, cat, print, or access these files. " +
      "Ask the user to provide non-secret variable names or redacted values if needed.",
  });
}

/**
 * beforeMCPExecution
 *
 * Spec output: { permission: "allow" | "deny" | "ask",
 *                user_message?: string, agent_message?: string }
 */
function handleBeforeMCPExecution(input) {
  // input.tool_input may be a string or object; also check input.arguments
  // for backwards compat with older Cursor versions
  const args = input.tool_input ?? input.arguments;
  if (!mcpArgsTouchSecrets(args)) {
    emit({ permission: "allow" });
    return;
  }
  emit({
    permission: "deny",
    user_message:
      "Blocked: MCP tool arguments reference a file that may contain secrets (env-secret-guard hook).",
    agent_message:
      "This MCP tool call was blocked by the env-secret-guard hook because its arguments " +
      "reference a path matching secret file patterns (.env, credentials.json, *.pem, *.key, etc). " +
      "Do not attempt to access these files. " +
      "Ask the user to provide non-secret variable names or redacted values if needed.",
  });
}

/**
 * beforeSubmitPrompt
 *
 * Spec output: { continue: boolean, user_message?: string }
 *
 * This hook CANNOT inject context or followup messages into the agent.
 * It can only allow or block the prompt submission.
 * We allow all prompts through — the actual enforcement happens in the
 * beforeReadFile / beforeShellExecution / beforeMCPExecution hooks.
 */
function handleBeforeSubmitPrompt(_input) {
  emit({ continue: true });
}

/**
 * stop
 *
 * Spec output: { followup_message?: string }
 * Fire-and-forget observation; we don't need to do anything here.
 */
function handleStop(_input) {
  emit({});
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  let input;
  try {
    input = JSON.parse(readFileSync(0, "utf8"));
  } catch {
    process.stderr.write(
      "env-secret-guard: invalid or empty hook input (JSON parse failed)\n",
    );
    process.exit(2);
  }

  const event = input.hook_event_name;

  switch (event) {
    case "beforeReadFile":
      handleBeforeReadFile(input);
      break;
    case "beforeShellExecution":
      handleBeforeShellExecution(input);
      break;
    case "beforeMCPExecution":
      handleBeforeMCPExecution(input);
      break;
    case "beforeSubmitPrompt":
      handleBeforeSubmitPrompt(input);
      break;
    case "stop":
      handleStop(input);
      break;
    default:
      emit({});
  }
}

try {
  main();
} catch (err) {
  process.stderr.write(`env-secret-guard: ${err.message}\n`);
  process.exit(2);
}
