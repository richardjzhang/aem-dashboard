# Spectrum 2 (`@react-spectrum/s2`) — audit reference

Use this file when `package.json` lists `@react-spectrum/s2` or the user asks about Spectrum 2 / S2 wiring. Pair with [spectrum-s2-examples.md](spectrum-s2-examples.md) for copy-paste patterns.

## What “correctly wired” usually means

S2 is not only components: **global CSS**, **macro-based styling**, **root Provider** (often with **router integration**), and **build plugins** must line up or you get silent layout issues, broken navigation inside primitives, or build failures.

### Checklist (repo audit)

1. **Entry CSS**: `import '@react-spectrum/s2/page.css'` once (typically `main.tsx` / app entry). Missing → baseline typography, background, and layout tokens can be wrong.
2. **Root `Provider`**: From `@react-spectrum/s2`, wrapping the tree that renders S2 UI. Confirm `locale`, `colorScheme`, and any documented props your app relies on.
3. **Router hook-up (React Router)**: If the app uses client-side routing, `Provider` often needs `router={{ navigate, useHref }}` from the same router instance as your app (see examples file). Mismatch → link-style controls and routing-aware children can misbehave.
4. **Style macros**: `import { style, iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' }` requires a **Vite/Webpack plugin** that understands Parcel macros (e.g. `unplugin-parcel-macros`). Without it, builds break or styles do not apply as intended.
5. **Locales (optional but common)**: `@react-aria/optimize-locales-plugin` in Vite with `locales: ['en-US']` (or your set) reduces bundle size; wrong `enforce` order can affect resolution—compare to a known-good `vite.config`.
6. **Icons**: Default import from `@react-spectrum/s2/icons/<PascalName>` only—not `@spectrum-icons` / Spectrum 1 icon paths unless you are intentionally bridging (usually avoid in S2-first apps).
7. **Spectrum 1 in the same app**: `@adobe/react-spectrum` uses a different `Provider` and component set. Mixing without migration causes **duplicate design contexts**, inconsistent UX, and invalid prop assumptions. For this repo, prefer migrating touched files to S2 (see workspace rule `spectrum-2-design-system.mdc`).

## Phase mapping (main skill)

| Main skill phase | S2-specific focus |
|------------------|------------------|
| Phase 3 (providers) | `Provider` from `@react-spectrum/s2`; router prop when using React Router |
| Phase 4 (entrypoints) | `@react-spectrum/s2` vs `@adobe/react-spectrum`; `…/style` macro import; `…/icons/*` |
| Phase 5 (props) | Compare to **installed** S2 typings—S2 props differ from Spectrum 1 for the same conceptual control |
| Phase 7 (peers) | React Aria / React Stately versions pulled by `@react-spectrum/s2`; watch duplicate `react` |

## Where to confirm APIs

- Prefer **TypeScript** from `node_modules/@react-spectrum/s2` for the exact prop surface on the installed version.
- Public docs move; the **lockfile + types** are the source of truth for an audit.

## Additional resources

- Examples and anti-patterns: [spectrum-s2-examples.md](spectrum-s2-examples.md)
