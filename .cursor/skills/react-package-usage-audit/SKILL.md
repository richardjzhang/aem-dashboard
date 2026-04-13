---
name: react-package-usage-audit
description: >-
  Audits that React/Next.js projects use npm packages correctly—imports and
  providers, framework APIs, and component usage including props (valid
  names, required vs optional, invalid DOM passthrough, deprecated or
  mutually-exclusive props). Covers Adobe Spectrum 2 (@react-spectrum/s2):
  Provider, page.css, style macros, icons, React Router integration, and
  avoiding mixed Spectrum 1 (@adobe/react-spectrum) usage, and that S2 components receive
  valid props per shipped types/docs—load spectrum-s2-reference.md and
  spectrum-s2-examples.md when package.json includes @react-spectrum/s2 or the
  user mentions Spectrum 2 or S2. Use when
  verifying libraries are wired and called right, debugging prop warnings,
  TypeScript prop errors, runtime API errors, or when the user asks if
  dependencies are being used properly.
---

# React package and API usage audit

## Goal

Surface **concrete correctness issues** from misusing dependencies and their public APIs: wrong modules, missing setup, invalid or inconsistent **props**, hook misuse, and version/peer problems. Prefer evidence from the repo and types over generic lint opinions.

## Phase 1 — Baseline

1. Read `package.json` (dependencies + devDependencies). Note React major, framework (`next`, `vite`, `react-scripts`, `expo`), UI kits (MUI, Radix, Chakra, **@react-spectrum/s2**), forms, routing, and data libraries.
2. If present, skim `package-lock.json` / `pnpm-lock.yaml` / `yarn.lock` for duplicate majors of `react`, `react-dom`, or nested copies that embed their own React.
3. Note monorepo/workspace layout (`packages/*`, `apps/*`) so searches stay scoped correctly.
4. When the codebase is TypeScript, run or consult existing **`tsc` / IDE diagnostics** for the changed or audited surface—many invalid props surface there before runtime.

## Phase 2 — Framework boundary checks

**Next.js (App Router)**

- `next/router` (`useRouter`) in `app/` → should usually be `next/navigation` (`useRouter`, `usePathname`, `useSearchParams`).
- Server-only modules (`next/headers`, `next/cache`, DB drivers) imported into `"use client"` files or used where only Server Components are valid.
- Client hooks (`useState`, event handlers) in Server Components without a dedicated Client child.

**Next.js (Pages Router)**

- Mixed App/Pages APIs in the wrong tree.

**Vite / CRA**

- `process.env` vs `import.meta.env` (Vite) / `REACT_APP_*` (CRA) mismatches.

Record each hit with **file path**, **line**, **why it is wrong**, and **expected pattern**.

## Phase 3 — Provider and context wiring

Libraries that need a **root provider** or **singleton** must have one before hooks run:

| Package (examples) | Look for | Common bug |
|--------------------|----------|------------|
| `@tanstack/react-query` | `useQuery`, `useMutation` | No `QueryClientProvider` |
| `react-redux` | `useSelector`, `useDispatch` | No `<Provider store={...}>` |
| `urql`, `@apollo/client` | client hooks | Missing provider |
| `react-router-dom` | `useNavigate`, `useParams` | Outside `Router` |
| `next-themes`, i18n libs | theme/intl hooks | Missing or mis-layered provider |
| `@react-spectrum/s2` | `Provider`, routed overlays/links | Missing `Provider`, missing `router` when using React Router, or wrapping S2 in `@adobe/react-spectrum` `Provider` |

Confirm providers in app root (`app/layout.tsx`, `main.tsx`, `_app.tsx`).

### Adobe Spectrum 2 (`@react-spectrum/s2`)

When this package appears in the repo (or the user names Spectrum 2 / S2), read on demand:

- **[spectrum-s2-reference.md](spectrum-s2-reference.md)** — wiring checklist: `page.css`, macro plugin, `Provider` + `router`, icons, Spectrum 1 vs S2.
- **[spectrum-s2-examples.md](spectrum-s2-examples.md)** — good vs bad patterns (Vite + React Router).

**Props on S2 components:** Treat each `@react-spectrum/s2` component as having a **strict public API**. Confirm call sites pass **only valid props** for that component and installed version:

- Prefer **`tsc` / IDE diagnostics** on audited files: invalid or misspelled prop names, wrong union values, or props that belong to Spectrum 1 / other kits often show up as type errors.
- Do **not** assume Spectrum 1 prop names or DOM habits carry over (e.g. legacy `UNSAFE_*`, RS1-only slots, or arbitrary `className` where S2 uses style macros or documented patterns—see the two S2 docs above).
- Watch **`...rest` / wrapper spreads** that widen props at runtime but are not accepted by the underlying S2 component; strip or narrow before forwarding.
- When types are ambiguous, **match the component’s exported prop types** or the package docs for your **exact** `@react-spectrum/s2` version.

Stay within the audit scope: correctness of imports, providers, build setup, and props—not full design reviews unless asked.

## Phase 4 — Wrong entrypoint / wrong package

- `react-router` vs `react-router-dom` in browser code.
- Imports that do not exist for the installed major (check version in `package.json`).
- UI kit entrypoints (`@mui/material`, lab, system) aligned with installed version and theming setup.

## Phase 5 — Props and component API usage

Verify **call sites match each library’s contract** (docs, TypeScript types, or shipped `PropTypes`).

**Cross-cutting (React + DOM)**

- **Invalid DOM attributes**: spreading `...props` or passing library-only props onto native elements (`div`, `span`) so unknown keys hit the DOM (warnings, hydration noise, or invalid HTML). Prefer destructuring out non-DOM props, `shouldForwardProp` (styled/emotion), or the library’s documented slot/wrapper pattern.
- **`className` vs `class`**, **`style` shape**, **`ref` forwarding**: wrappers that omit `forwardRef` where the library or parent expects a ref to a real node.
- **Boolean vs string**: props that must be booleans but arrive as strings from serializers or HTML.

**Third-party components**

- **Required vs optional**: missing required props, or omitting props that the library treats as required in a given `variant` / `mode`.
- **Invalid combinations**: mutually exclusive props set together, or a prop only valid when another flag is on (discriminated patterns: e.g. controlled vs uncontrolled, `open` + `defaultOpen`).
- **Renamed / deprecated props** after upgrades: grep for old names mentioned in the library’s migration guide for your major.
- **Version-specific APIs**: props that exist only in newer majors (or removed in newer)—confirm against installed version.

**Adobe Spectrum 2 (`@react-spectrum/s2`)**

- Apply Phase 5 rules **per S2 component**: every prop at each call site should be **valid for that component** per shipped TypeScript types or official docs for the installed version (not RS1 names, not guessed DOM passthrough).
- Re-read the S2 subsection under Phase 3 and **`spectrum-s2-reference.md` / `spectrum-s2-examples.md`** when auditing styling- or layout-related props (style macros vs invalid attributes).

**Patterns that often hide prop bugs**

- Huge `...rest` spreads into custom components without stripping invalid keys before they reach DOM or headless primitives.
- Wrappers that **narrow** the public props type in TS but still **forward** a wider bag at runtime.
- Copy-paste from docs of a **different major** (different prop names or defaults).

Flag issues with the **prop name(s)** involved and the **correct shape** per the installed package.

## Phase 6 — Hooks rules and SSR pitfalls

- Hooks called conditionally or after early returns.
- `useLayoutEffect` on server-rendered paths without guards where it causes warnings or breakage.
- `useEffect` dependencies: flag only when omission likely causes **stale behavior tied to props/state**, not blanket exhaustive-deps churn.

## Phase 7 — Peer dependency and duplicate React

1. Use `npm ls react` / `pnpm why react` (or `pnpm dlx sherif` when appropriate) to spot duplicates or peer warnings.
2. **Invalid hook call** → duplicate React or mismatched `react` / `react-dom`.
3. **Context is null** → missing provider or different React instance between provider and consumer.

## Output format

```markdown
## React package & API audit — [project name]

### Summary
- [N] issues: [critical] critical, [major] major, [minor] minor

### Findings
1. **[severity]** [title] — `[file:line]`
   - **Symptom:** …
   - **Cause:** … (name props/APIs explicitly when relevant)
   - **Fix:** …

### Residual risks / follow-ups
- …
```

**Severity**: **critical** (breakage, wrong data, security), **major** (likely user-visible bug), **minor** (edge case / warning-only).

## Principles

- Tie findings to **specific imports, components, and prop names**; avoid vague “check props” without pointing at the contract that is violated.
- Use **TypeScript errors and library types** as primary signal for invalid props when available.
- Do not treat naming style or bundle size as correctness unless the user expanded scope.
- When unsure an API or prop exists for the installed version, **confirm in `package.json` / lockfile** (and types or docs for that major) before recommending a change.
