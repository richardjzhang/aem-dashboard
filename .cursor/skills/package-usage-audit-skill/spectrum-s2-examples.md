# Spectrum 2 — examples for audits

Concrete patterns aligned with **Vite + React Router** (this repo). Use when judging whether S2 usage is correct or flagging fixes.

## Root wiring (good)

**`main.tsx` — global S2 page styles**

```tsx
import '@react-spectrum/s2/page.css';
```

**`App.tsx` — Provider + React Router 7**

```tsx
import { BrowserRouter, useHref, useNavigate } from 'react-router';
import { Provider } from '@react-spectrum/s2';

function AppProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <Provider
      locale="en-US"
      colorScheme="light"
      background="base"
      router={{ navigate, useHref }}
    >
      {children}
    </Provider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>{/* routes */}</AppProvider>
    </BrowserRouter>
  );
}
```

**`vite.config.ts` — macros + locale optimization (representative)**

```ts
import macros from 'unplugin-parcel-macros';
import optimizeLocales from '@react-aria/optimize-locales-plugin';

export default defineConfig({
  plugins: [
    macros.vite(),
    react(),
    { ...optimizeLocales.vite({ locales: ['en-US'] }), enforce: 'pre' },
  ],
});
```

## Components, styles, icons (good)

```tsx
import { ActionButton, Text } from '@react-spectrum/s2';
import { style, iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };
import Bell from '@react-spectrum/s2/icons/Bell';

export function Example() {
  return (
    <div className={style({ display: 'flex', gap: 8, alignItems: 'center' })}>
      <ActionButton aria-label="Notifications">
        <Bell styles={iconStyle({ size: 'M' })} />
      </ActionButton>
      <Text>Hello</Text>
    </div>
  );
}
```

Adjust `style` / `iconStyle` keys to match **current** S2 typings for your version—do not assume Spectrum 1 prop names.

## Anti-patterns (flag in audits)

**Wrong design system or mixed roots**

```tsx
// BAD: Spectrum 1 Provider wrapping S2 children (wrong context / themes)
import { Provider } from '@adobe/react-spectrum';
import { Button } from '@react-spectrum/s2';
```

**Missing page CSS**

```tsx
// BAD: S2 components rendered but no @react-spectrum/s2/page.css in entry
```

**Macro import without build support**

```tsx
// BAD if unplugin-parcel-macros (or equivalent) is not configured
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
```

**Router-aware app but Provider without `router`**

```tsx
// BAD when using React Router: S2 Provider without router prop
<Provider locale="en-US" colorScheme="light">
  {children}
</Provider>
```

**Wrong icon entry**

```tsx
// BAD: ad-hoc icon pack or Spectrum 1 paths for product UI
import { Icon } from '@spectrum-icons/ui/Alert';
// Prefer: import Alert from '@react-spectrum/s2/icons/Alert';
```

**Raw controls where S2 supplies primitives**

```tsx
// BAD for S2-first product UI (accessibility + design contract)
<button type="button" onClick={onSave}>Save</button>
// Prefer: <Button onPress={onSave}>Save</Button> from @react-spectrum/s2
```

## Severity hints

| Issue | Typical severity |
|-------|------------------|
| No `Provider` / wrong `Provider` | **critical** |
| Missing `page.css` | **major** (widespread visual / layout wrongness) |
| Missing macro plugin with macro imports | **critical** (build) |
| Missing `router` on `Provider` in routed app | **major** |
| Spectrum 1 + S2 mixed in same surface | **major** (consistency; migration) |
| Wrong icon import | **minor**–**major** (build vs wrong glyph) |
