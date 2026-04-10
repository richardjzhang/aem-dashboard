import {
  ActionButton,
  Badge,
  Button,
  Heading,
  StatusLight,
  Tag,
  TagGroup,
  Text,
} from '@react-spectrum/s2';
import { iconStyle, style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Close from '@react-spectrum/s2/icons/Close';
import Delete from '@react-spectrum/s2/icons/Delete';
import Download from '@react-spectrum/s2/icons/Download';
import Edit from '@react-spectrum/s2/icons/Edit';
import Share from '@react-spectrum/s2/icons/Share';
import type { AssetRecord } from '../../data/assets';
import { getFileTypeVariant, getStatusVariant } from './presentation';

const panelStyle = style({
  width: 360,
  flexShrink: 0,
  borderRadius: 'xl',
  backgroundColor: 'elevated',
  boxShadow: 'elevated',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray-200',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  minHeight: 0,
});

const headerStyle = style({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'space-between',
  gap: 12,
});

const previewStyle = style({
  width: 'full',
  minHeight: 260,
  borderRadius: 'xl',
  overflow: 'hidden',
  position: 'relative',
});

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const metadataGridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gap: 12,
});

const metadataItemStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

const metaLabelStyle = style({
  color: 'neutral-subdued',
  font: 'body',
});

const versionListStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const versionItemStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  paddingY: 8,
  borderBottomWidth: 1,
  borderBottomStyle: 'solid',
  borderBottomColor: 'gray-200',
});

const actionGridStyle = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
  gap: 12,
});

type AssetDetailPanelProps = {
  asset: AssetRecord;
  onClose: () => void;
};

export default function AssetDetailPanel({ asset, onClose }: AssetDetailPanelProps) {
  const tagItems = asset.tags.map((tag) => ({ id: tag, label: tag }));
  const hasImage = Boolean(asset.thumbnail.imageSrc);

  return (
    <aside className={panelStyle} aria-label={`${asset.filename} details`}>
      <div className={headerStyle}>
        <div className={style({ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 })}>
          <Heading level={3}>{asset.filename}</Heading>
          <div className={style({ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' })}>
            <Badge variant={getFileTypeVariant(asset.fileType)} fillStyle="subtle">
              {asset.fileType}
            </Badge>
            <StatusLight variant={getStatusVariant(asset.status)}>{asset.status}</StatusLight>
          </div>
        </div>

        <ActionButton isQuiet aria-label="Close details panel" onPress={onClose}>
          <Close styles={iconStyle({ size: 'S' })} />
        </ActionButton>
      </div>

      <div className={`${previewStyle} app-asset-thumbnail`} style={{ background: asset.thumbnail.background }}>
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
            <div className="app-asset-thumbnail__label app-asset-thumbnail__label--large">
              <span className="app-asset-thumbnail__eyebrow">{asset.fileType}</span>
              <span className="app-asset-thumbnail__title">{asset.thumbnail.title}</span>
            </div>
          </>
        )}
      </div>

      <section className={sectionStyle}>
        <Heading level={4}>Metadata</Heading>
        <div className={metadataGridStyle}>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>Filename</div>
            <Text>{asset.filename}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>File type</div>
            <Text>{asset.fileType}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>Dimensions</div>
            <Text>{asset.dimensions}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>File size</div>
            <Text>{asset.fileSize}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>Created date</div>
            <Text>{asset.createdAt}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>Modified date</div>
            <Text>{asset.modifiedAt}</Text>
          </div>
          <div className={metadataItemStyle}>
            <div className={metaLabelStyle}>Created by</div>
            <Text>{asset.createdBy}</Text>
          </div>
        </div>
      </section>

      <section className={sectionStyle}>
        <Heading level={4}>Tags</Heading>
        <TagGroup aria-label="Asset tags" items={tagItems}>
          {(item) => <Tag id={item.id}>{item.label}</Tag>}
        </TagGroup>
      </section>

      <section className={sectionStyle}>
        <Heading level={4}>Version history</Heading>
        <div className={versionListStyle}>
          {asset.versions.map((version) => (
            <div key={version.label} className={versionItemStyle}>
              <Text>{version.label}</Text>
              <Text>{version.date}</Text>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionStyle}>
        <Heading level={4}>Actions</Heading>
        <div className={actionGridStyle}>
          <Button variant="secondary" fillStyle="outline">
            <Download styles={iconStyle({ size: 'S' })} />
            <Text>Download</Text>
          </Button>
          <Button variant="secondary" fillStyle="outline">
            <Share styles={iconStyle({ size: 'S' })} />
            <Text>Share</Text>
          </Button>
          <Button variant="secondary" fillStyle="outline">
            <Edit styles={iconStyle({ size: 'S' })} />
            <Text>Edit</Text>
          </Button>
          <Button variant="negative" fillStyle="outline">
            <Delete styles={iconStyle({ size: 'S' })} />
            <Text>Delete</Text>
          </Button>
        </div>
      </section>
    </aside>
  );
}