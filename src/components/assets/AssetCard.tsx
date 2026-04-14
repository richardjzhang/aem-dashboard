import { Badge, Card, CardPreview, Content, StatusLight, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import type { AssetRecord } from '../../data/assets';
import { getFileTypeVariant, getStatusVariant } from './presentation';

const cardStyle = style<{
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

/* Card outside CardView renders a non-interactive div; onPress is stripped by filterDOMProps. */
const cardHitTargetStyle = style({
  width: 'full',
  minWidth: 0,
  borderRadius: 'xl',
  cursor: 'pointer',
  outlineStyle: 'none',
});

const previewWrapperStyle = style<{
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
    <div
      className={cardHitTargetStyle}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${asset.filename}`}
      onClick={() => onSelect(asset)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(asset);
        }
      }}
    >
    {/* KAN-60: keep Card props within CardProps only; invalid demo props break tsc -b. */}
    <Card
      UNSAFE_className={cardStyle({ isSelected, view }) as unknown as string & { properties?: never }}
      textValue={asset.filename}
    >
      <CardPreview UNSAFE_className={previewWrapperStyle({ view }) as unknown as string & { properties?: never }}>
        <div
          className={`app-asset-thumbnail ${
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
        </div>
      </CardPreview>

      <Content styles={contentStyle}>
        <Text slot="title">{asset.filename}</Text>

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
      </Content>
    </Card>
    </div>
  );
}
