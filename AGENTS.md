# AGENTS.md

## Cursor Cloud specific instructions

This is a **client-side only** React + TypeScript + Vite application (AEM Assets Dashboard). There is no backend, database, or external API — all data is hardcoded in `src/data/assets.ts`.

### Key commands

See `package.json` scripts:
- `npm run dev` — start Vite dev server (port 5173)
- `npm run build` — TypeScript check (`tsc -b`) then Vite production build
- `npm run lint` — ESLint
- `npm run preview` — preview production build

### Known issues

- `npm run build` has a pre-existing TypeScript error in `src/components/Sidebar.tsx` (line 84): the `density` prop does not exist on `ListView`. The dev server (`npm run dev`) is unaffected since Vite does not enforce TS strictness at serve time.

### Dev server

The Vite dev server supports HMR. Run with `--host 0.0.0.0` to expose on all interfaces when testing in Cloud Agent VMs:

```
npm run dev -- --host 0.0.0.0
```
