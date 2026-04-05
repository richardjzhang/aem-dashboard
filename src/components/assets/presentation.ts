import type { AssetRecord, AssetStatus } from '../../data/assets';

export function getStatusVariant(status: AssetStatus) {
  switch (status) {
    case 'Approved':
      return 'positive';
    case 'Draft':
      return 'notice';
    case 'Expired':
      return 'negative';
    case 'In Review':
      return 'informative';
    default:
      return 'neutral';
  }
}

export function getFileTypeVariant(fileType: AssetRecord['fileType']) {
  switch (fileType) {
    case 'JPG':
    case 'PNG':
      return 'seafoam';
    case 'PSD':
      return 'purple';
    case 'MP4':
      return 'indigo';
    case 'PDF':
      return 'red';
    case 'SVG':
      return 'cyan';
    case 'ZIP':
      return 'gray';
    default:
      return 'neutral';
  }
}
