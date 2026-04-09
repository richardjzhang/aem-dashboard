import { describe, expect, it } from 'vitest';
import { assets } from '../../data/assets';
import { filterAssets } from './filterAssets';

describe('filterAssets', () => {
  it('returns only approved assets by default filter state', () => {
    const filtered = filterAssets(assets, {
      searchValue: '',
      selectedFileType: 'All',
      selectedStatus: 'Approved',
    });

    expect(filtered.every((asset) => asset.status === 'Approved')).toBe(true);
    expect(filtered).toHaveLength(6);
  });

  it('matches search case-insensitively and ignores leading or trailing spaces', () => {
    const filtered = filterAssets(assets, {
      searchValue: '  HERO-BANNER-SUMMER.JPG  ',
      selectedFileType: 'All',
      selectedStatus: 'All',
    });

    expect(filtered).toEqual([assets[0]]);
  });

  it('applies file type and status filters together', () => {
    const filtered = filterAssets(assets, {
      searchValue: '',
      selectedFileType: 'MP4',
      selectedStatus: 'In Review',
    });

    expect(filtered.map((asset) => asset.id)).toEqual(['product-demo-video']);
  });

  it('returns an empty list when no assets match all criteria', () => {
    const filtered = filterAssets(assets, {
      searchValue: 'holiday',
      selectedFileType: 'PDF',
      selectedStatus: 'Approved',
    });

    expect(filtered).toEqual([]);
  });
});
