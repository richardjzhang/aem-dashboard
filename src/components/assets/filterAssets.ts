import type { AssetRecord } from '../../data/assets';
import { assetFileTypes, assetStatuses } from '../../data/assets';

export type AssetFilterFileType = (typeof assetFileTypes)[number];
export type AssetFilterStatus = (typeof assetStatuses)[number];

type FilterAssetsOptions = {
  searchValue: string;
  selectedFileType: AssetFilterFileType;
  selectedStatus: AssetFilterStatus;
};

export function filterAssets(
  assetItems: readonly AssetRecord[],
  { searchValue, selectedFileType, selectedStatus }: FilterAssetsOptions,
) {
  const normalizedSearch = searchValue.trim().toLowerCase();

  return assetItems.filter((asset) => {
    const matchesSearch = asset.filename.toLowerCase().includes(normalizedSearch);
    const matchesFileType = selectedFileType === 'All' || asset.fileType === selectedFileType;
    const matchesStatus = selectedStatus === 'All' || asset.status === selectedStatus;
    return matchesSearch && matchesFileType && matchesStatus;
  });
}
