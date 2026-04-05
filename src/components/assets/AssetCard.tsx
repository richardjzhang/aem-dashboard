import { Badge, StatusLight, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import type { AssetRecord } from '../../data/assets';
import { getFileTypeVariant, getStatusVariant } from './presentation';

const cardButtonStyle = style<{
  isSelected: boolean;
  view: 'grid' | 'list';
}>({
  width: 'full',
  minWidth: 0,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: {
    default: 'transparent',
    isSelected: 'accent-900',
  },
  borderRadius: 'xl',
  backgroundColor: 'elevated',
  boxShadow: {
    default: 'elevated',
    isSelected: 'emphasized',
  },
  overflow: 'hidden',
  display: 'flex',
  flexDirection: {
    view: {
      grid: 'column',
      list: 'row',
    },
  },
  textAlign: 'start',
  cursor: 'pointer',
  transition: 'default',
  outlineStyle: 'none',
});

const previewStyle = style<{
  view: 'grid' | 'list';
}>({
  borderRadius: 'lg',
  overflow: 'hidden',
  flexShrink: 0,
  width: {
    view: {
      grid: 'full',
      list: 220,
    },
  },
});

const contentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  minWidth: 0,
  flexGrow: 1,
  padding: 16,
});

const filenameStyle = style({
  font: 'heading-sm',
  color: 'neutral',
});

const metaRowStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
  alignItems: 'center',
});

const detailTextStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  color: 'neutral-subdued',
  font: 'body',
});

type AssetCardProps = {
  asset: AssetRecord;
  isSelected: boolean;
  view: 'grid' | 'list';
  onSelect: (asset: AssetRecord) => void;
};

export default function AssetCard({ asset, isSelected, view, onSelect }: AssetCardProps) {
  const hasImage = Boolean(asset.thumbnail.imageSrc);

  return (
    <button
      type="button"
      className={cardButtonStyle({ isSelected, view })}
      aria-pressed={isSelected}
      onClick={() => onSelect(asset)}
    >
      <div
        className={`${previewStyle({ view })} app-asset-thumbnail ${
          view === 'grid' ? 'app-asset-thumbnail--card-grid' : 'app-asset-thumbnail--card-list'
        }`}
        style={{ background: asset.thumbnail.background }}
      >
        {hasImage ? (
          <>
            <img
              src={asset.thumbnail.imageSrc}
              alt={`${asset.filename} preview`}
              className="app-asset-thumbnail__image"
            />
            <div className="app-asset-thumbnail__overlay app-asset-thumbnail__overlay--image" />
          </>
        ) : (
          <>
            <div className="app-asset-thumbnail__overlay" />
            <div className="app-asset-thumbnail__label">
              <span className="app-asset-thumbnail__eyebrow">{asset.fileType}</span>
              <span className="app-asset-thumbnail__title">{asset.thumbnail.title}</span>
            </div>
          </>
        )}
        <div className="app-asset-thumbnail__accent" style={{ backgroundColor: asset.thumbnail.accent }} />
      </div>

      <div className={contentStyle}>
        <div className={filenameStyle}>{asset.filename}</div>

        <div className={metaRowStyle}>
          <Badge size="M" variant={getFileTypeVariant(asset.fileType)} fillStyle="subtle">
            {asset.fileType}
          </Badge>
          <StatusLight variant={getStatusVariant(asset.status)}>{asset.status}</StatusLight>
        </div>

        <div className={detailTextStyle}>
          <Text>{asset.dimensions}</Text>
          <Text>{asset.fileSize}</Text>
          <Text>Updated {asset.modifiedAt}</Text>
        </div>
      </div>
    </button>
  );
}
