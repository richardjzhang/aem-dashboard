import {
  ActionButton,
  Breadcrumb,
  Breadcrumbs,
  Button,
  SearchField,
  Text,
  ToggleButton,
  ToggleButtonGroup,
} from '@react-spectrum/s2';
import { iconStyle, style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Filter from '@react-spectrum/s2/icons/Filter';
import Upload from '@react-spectrum/s2/icons/Upload';
import ViewGrid from '@react-spectrum/s2/icons/ViewGrid';
import ViewList from '@react-spectrum/s2/icons/ViewList';
import { useMemo, useState } from 'react';
import { assets, assetFileTypes, assetStatuses, type AssetRecord } from '../data/assets';
import AppShell from './AppShell';
import AssetCard from './assets/AssetCard';
import AssetDetailPanel from './assets/AssetDetailPanel';

const pageStyle = style({
  display: 'flex',
  gap: 24,
  alignItems: 'start',
  minWidth: 0,
});

const contentColumnStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  flexGrow: 1,
  minWidth: 0,
});

const heroStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: 24,
  borderRadius: 'xl',
  backgroundColor: 'elevated',
  boxShadow: 'elevated',
});

const heroRowStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 20,
  flexWrap: 'wrap',
});

const titleBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const eyebrowStyle = style({
  color: 'neutral-subdued',
  font: 'body',
});

const titleStyle = style({
  font: 'heading-xl',
  color: 'neutral',
});

const toolbarStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  flexWrap: 'wrap',
});

const searchWrapStyle = style({
  minWidth: 320,
  flexGrow: 1,
});

const filterSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const filterRowStyle = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 12,
  alignItems: 'center',
});

const sectionLabelStyle = style({
  color: 'neutral-subdued',
  font: 'heading-sm',
});

const summaryRowStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  flexWrap: 'wrap',
});

const summaryTextStyle = style({
  color: 'neutral-subdued',
  font: 'body',
});

const emptyStateStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 280,
  padding: 32,
  borderRadius: 'xl',
  backgroundColor: 'layer-1',
  borderWidth: 1,
  borderStyle: 'dashed',
  borderColor: 'gray-300',
  color: 'neutral-subdued',
});

type ViewMode = 'grid' | 'list';
type FileTypeFilter = (typeof assetFileTypes)[number];
type StatusFilter = (typeof assetStatuses)[number];

export default function AssetsPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFileType, setSelectedFileType] = useState<FileTypeFilter>('All');
  const [selectedStatus, setSelectedStatus] = useState<StatusFilter>('Approved');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const matchesSearch = asset.filename.toLowerCase().includes(searchValue.trim().toLowerCase());
      const matchesFileType = selectedFileType === 'All' || asset.fileType === selectedFileType;
      const matchesStatus = selectedStatus === 'All' || asset.status === selectedStatus;
      return matchesSearch && matchesFileType && matchesStatus;
    });
  }, [searchValue, selectedFileType, selectedStatus]);

  const selectedAsset = useMemo(
    () => filteredAssets.find((asset) => asset.id === selectedAssetId) ?? null,
    [filteredAssets, selectedAssetId],
  );

  const viewToggleKeys = useMemo(() => new Set([viewMode]), [viewMode]);

  return (
    <AppShell>
      <div className={pageStyle}>
        <div className={contentColumnStyle}>
          <section className={heroStyle}>
            <Breadcrumbs aria-label="Asset path">
              <Breadcrumb href="/">Assets</Breadcrumb>
              <Breadcrumb href="/">Marketing</Breadcrumb>
              <Breadcrumb href="/">Campaign Assets</Breadcrumb>
              <Breadcrumb href="/">Q2 2025</Breadcrumb>
            </Breadcrumbs>

            <div className={heroRowStyle}>
              <div className={titleBlockStyle}>
                <div className={eyebrowStyle}>Digital Asset Management workspace</div>
                <h1 className={titleStyle}>AEM Assets</h1>
              </div>

              <div className={toolbarStyle}>
                <div className={searchWrapStyle}>
                  <SearchField
                    aria-label="Search assets"
                    placeholder="Search assets..."
                    value={searchValue}
                    onChange={setSearchValue}
                  />
                </div>

                <ToggleButtonGroup
                  aria-label="Choose asset view"
                  selectionMode="single"
                  selectedKeys={viewToggleKeys}
                  onSelectionChange={(keys) => {
                    const nextView = keys.has('list') ? 'list' : 'grid';
                    setViewMode(nextView);
                  }}
                >
                  <ToggleButton id="grid" aria-label="Grid view">
                    <ViewGrid styles={iconStyle({ size: 'S' })} />
                  </ToggleButton>
                  <ToggleButton id="list" aria-label="List view">
                    <ViewList styles={iconStyle({ size: 'S' })} />
                  </ToggleButton>
                </ToggleButtonGroup>

                <Button variant="accent">
                  <Upload styles={iconStyle({ size: 'S' })} />
                  <Text>Upload Assets</Text>
                </Button>
              </div>
            </div>

            <div className={filterSectionStyle}>
              <div className={filterRowStyle}>
                <div className={sectionLabelStyle}>File Type</div>
                {assetFileTypes.map((fileType) => (
                  <Button
                    key={fileType}
                    variant={selectedFileType === fileType ? 'accent' : 'secondary'}
                    fillStyle={selectedFileType === fileType ? 'fill' : 'outline'}
                    onPress={() => setSelectedFileType(fileType)}
                  >
                    <Text>{fileType}</Text>
                  </Button>
                ))}
              </div>

              <div className={filterRowStyle}>
                <div className={sectionLabelStyle}>Status</div>
                {assetStatuses.map((status) => (
                  <Button
                    key={status}
                    variant={selectedStatus === status ? 'accent' : 'secondary'}
                    fillStyle={selectedStatus === status ? 'fill' : 'outline'}
                    onPress={() => setSelectedStatus(status)}
                  >
                    <Text>{status}</Text>
                  </Button>
                ))}
                <ActionButton isQuiet aria-label="More filters">
                  <Filter styles={iconStyle({ size: 'S' })} />
                  <Text>Date Range</Text>
                </ActionButton>
                <ActionButton isQuiet aria-label="Tag filters">
                  <Filter styles={iconStyle({ size: 'S' })} />
                  <Text>Tags</Text>
                </ActionButton>
              </div>
            </div>
          </section>

          <div className={summaryRowStyle}>
            <div className={summaryTextStyle}>
              Showing {filteredAssets.length} of {assets.length} assets
            </div>
            <div className={summaryTextStyle}>
              File Type ({selectedFileType}) · Status ({selectedStatus})
            </div>
          </div>

          {filteredAssets.length === 0 ? (
            <div className={emptyStateStyle}>
              <Text>No assets match the current filters.</Text>
              <Button
                variant="secondary"
                fillStyle="outline"
                onPress={() => {
                  setSearchValue('');
                  setSelectedFileType('All');
                  setSelectedStatus('All');
                }}
              >
                <Text>Reset filters</Text>
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'app-asset-grid' : 'app-asset-list'}>
              {filteredAssets.map((asset) => (
                <AssetCard
                  key={asset.id}
                  asset={asset}
                  isSelected={selectedAssetId === asset.id}
                  view={viewMode}
                  onSelect={(nextAsset: AssetRecord) => setSelectedAssetId(nextAsset.id)}
                />
              ))}
            </div>
          )}
        </div>

        {selectedAsset ? (
          <AssetDetailPanel asset={selectedAsset} onClose={() => setSelectedAssetId(null)} />
        ) : null}
      </div>
    </AppShell>
  );
}
