import { describe, expect, it } from 'vitest';
import type { AssetRecord, AssetStatus } from '../../data/assets';
import { getFileTypeVariant, getStatusVariant } from './presentation';

describe('getStatusVariant', () => {
  it('maps known status values to expected variants', () => {
    expect(getStatusVariant('Approved')).toBe('positive');
    expect(getStatusVariant('Draft')).toBe('notice');
    expect(getStatusVariant('Expired')).toBe('negative');
    expect(getStatusVariant('In Review')).toBe('informative');
  });

  it('returns neutral for unknown statuses', () => {
    expect(getStatusVariant('Archived' as AssetStatus)).toBe('neutral');
  });
});

describe('getFileTypeVariant', () => {
  it('maps known file type values to expected variants', () => {
    expect(getFileTypeVariant('JPG')).toBe('seafoam');
    expect(getFileTypeVariant('PNG')).toBe('seafoam');
    expect(getFileTypeVariant('PSD')).toBe('purple');
    expect(getFileTypeVariant('MP4')).toBe('indigo');
    expect(getFileTypeVariant('PDF')).toBe('red');
    expect(getFileTypeVariant('SVG')).toBe('cyan');
    expect(getFileTypeVariant('ZIP')).toBe('gray');
  });

  it('returns neutral for unknown file types', () => {
    expect(getFileTypeVariant('WEBP' as AssetRecord['fileType'])).toBe('neutral');
  });
});
