import type { CSSProperties } from 'react';

/** 13px secondary line using app muted text token. */
export const mutedBody13: CSSProperties = {
  fontSize: 13,
  color: 'var(--app-text-muted)',
};

/** Muted body with comfortable line height for multi-line blocks. */
export const mutedBody13Loose: CSSProperties = {
  ...mutedBody13,
  lineHeight: 1.5,
};

/** Muted meta lines that inherit font size from context (e.g. detail cards). */
export const mutedMeta: CSSProperties = {
  color: 'var(--app-text-muted)',
  lineHeight: 1.5,
};

/** Single-line muted label (e.g. environment chip). */
export const mutedLabelNowrap: CSSProperties = {
  ...mutedBody13,
  whiteSpace: 'nowrap',
};
