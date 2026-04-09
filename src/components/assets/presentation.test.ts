import { describe, expect, it } from 'vitest';
import { getFileTypeVariant, getStatusVariant } from './presentation';

describe('getStatusVariant', () => {
  it('maps each known asset status to the expected UI variant', () => {
    expect(getStatusVariant('Approved')).toBe('positive');
    expect(getStatusVariant('Draft')).toBe('notice');
    expect(getStatusVariant('Expired')).toBe('negative');
    expect(getStatusVariant('In Review')).toBe('informative');
  });

  it('falls back to neutral for unexpected statuses', () => {
    expect(getStatusVariant('Archived' as never)).toBe('neutral');
  });
});

describe('getFileTypeVariant', () => {
  it('maps each known file type to the expected badge variant', () => {
    expect(getFileTypeVariant('JPG')).toBe('seafoam');
    expect(getFileTypeVariant('PNG')).toBe('seafoam');
    expect(getFileTypeVariant('PSD')).toBe('purple');
    expect(getFileTypeVariant('MP4')).toBe('indigo');
    expect(getFileTypeVariant('PDF')).toBe('red');
    expect(getFileTypeVariant('SVG')).toBe('cyan');
    expect(getFileTypeVariant('ZIP')).toBe('gray');
  });

  it('falls back to neutral for unexpected file types', () => {
    expect(getFileTypeVariant('DOCX' as never)).toBe('neutral');
  });
});
