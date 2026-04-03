import {
  Heading,
  ListView,
  ListViewItem,
  Picker,
  PickerItem,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };
import type { Key } from '@react-types/shared';
import { useState } from 'react';
import { GridListHeader, GridListSection } from 'react-aria-components';
import Apps from '@react-spectrum/s2/icons/Apps';
import ChartTrend from '@react-spectrum/s2/icons/ChartTrend';
import Cloud from '@react-spectrum/s2/icons/Cloud';
import Edit from '@react-spectrum/s2/icons/Edit';
import FileText from '@react-spectrum/s2/icons/FileText';
import GlobeGrid from '@react-spectrum/s2/icons/GlobeGrid';
import Home from '@react-spectrum/s2/icons/Home';
import KeyGlyph from '@react-spectrum/s2/icons/Key';
import Lock from '@react-spectrum/s2/icons/Lock';
import Plugin from '@react-spectrum/s2/icons/Plugin';
import Settings from '@react-spectrum/s2/icons/Settings';
import Target from '@react-spectrum/s2/icons/Target';

const navRootStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 224,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
});

const navInnerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 16,
  paddingBottom: 12,
  height: 'full',
  minHeight: 0,
  overflow: 'hidden',
});

const envPickerWrapStyle = style({
  paddingX: 16,
  paddingBottom: 16,
});

const listWrapStyle = style({
  paddingX: 8,
  flexGrow: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
});

const listViewStyle = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

const navItemRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: 12,
  minWidth: 0,
});

const navLabelStyle = style({
  color: 'white',
});

const sectionHeadingStyle = style({
  font: 'heading-xs',
  color: 'white',
  marginTop: 20,
  marginBottom: 8,
});

const iconS = iconStyle({ size: 'S', color: 'white' });

function NavItemContent(props: { icon: React.ReactNode; label: string }) {
  return (
    <div className={navItemRowStyle}>
      {props.icon}
      <Text styles={navLabelStyle}>{props.label}</Text>
    </div>
  );
}

export default function Sidebar() {
  const [environment, setEnvironment] = useState<Key>('env1');

  return (
    <nav
      className={navRootStyle}
      aria-label="Application"
      style={{
        backgroundColor: 'var(--app-panel-background)',
        borderInlineEnd: '1px solid rgba(255, 255, 255, 0.14)',
        color: 'rgba(255, 255, 255, 0.92)',
      }}
    >
      <div className={navInnerStyle}>
        <div className={envPickerWrapStyle}>
          <Picker
            label="Environment"
            aria-label="Select environment"
            isQuiet
            size="S"
            styles={style({ width: 'full' })}
            selectedKey={environment}
            onSelectionChange={(key) => {
              if (key != null) {
                setEnvironment(key);
              }
            }}
          >
            <PickerItem id="env1" textValue="Production">
              Production
            </PickerItem>
            <PickerItem id="env2" textValue="Staging">
              Staging
            </PickerItem>
            <PickerItem id="env3" textValue="Development">
              Development
            </PickerItem>
          </Picker>
        </div>

        <div className={listWrapStyle}>
          <ListView
            aria-label="Application navigation"
            selectionMode="single"
            defaultSelectedKeys={['home']}
            selectionStyle="highlight"
            isQuiet
            overflowMode="truncate"
            styles={listViewStyle}
          >
            <ListViewItem id="home" textValue="Home">
              <NavItemContent icon={<Home styles={iconS} />} label="Home" />
            </ListViewItem>
            <ListViewItem id="universal-editor" textValue="Universal Editor">
              <NavItemContent icon={<Edit styles={iconS} />} label="Universal Editor" />
            </ListViewItem>
            <ListViewItem id="cloud-manager" textValue="Cloud Manager">
              <NavItemContent icon={<Cloud styles={iconS} />} label="Cloud Manager" />
            </ListViewItem>
            <ListViewItem id="cloud-acceleration-manager" textValue="Cloud Acceleration Manager">
              <NavItemContent icon={<ChartTrend styles={iconS} />} label="Cloud Acceleration Manager" />
            </ListViewItem>
            <ListViewItem id="software-distribution" textValue="Software Distribution">
              <NavItemContent icon={<Apps styles={iconS} />} label="Software Distribution" />
            </ListViewItem>
            <ListViewItem id="extension-manager" textValue="Extension Manager">
              <NavItemContent icon={<Plugin styles={iconS} />} label="Extension Manager" />
            </ListViewItem>

            <GridListSection aria-label="Security and Compliance">
              <GridListHeader>
                <Heading level={4} styles={sectionHeadingStyle}>
                  Security and Compliance
                </Heading>
              </GridListHeader>
              <ListViewItem id="security-health" textValue="Security Health">
                <NavItemContent icon={<Settings styles={iconS} />} label="Security Health" />
              </ListViewItem>
              <ListViewItem id="penetration-tests" textValue="Penetration Tests">
                <NavItemContent icon={<Target styles={iconS} />} label="Penetration Tests" />
              </ListViewItem>
              <ListViewItem id="customer-managed-keys" textValue="Customer Managed Keys">
                <NavItemContent icon={<KeyGlyph styles={iconS} />} label="Customer Managed Keys" />
              </ListViewItem>
              <ListViewItem id="advanced-waf" textValue="Advanced WAF">
                <NavItemContent icon={<Lock styles={iconS} />} label="Advanced WAF" />
              </ListViewItem>
              <ListViewItem id="cdn-traffic" textValue="CDN Traffic">
                <NavItemContent icon={<GlobeGrid styles={iconS} />} label="CDN Traffic" />
              </ListViewItem>
              <ListViewItem id="security-documents" textValue="Security Documents">
                <NavItemContent icon={<FileText styles={iconS} />} label="Security Documents" />
              </ListViewItem>
            </GridListSection>
          </ListView>
        </div>
      </div>
    </nav>
  );
}
