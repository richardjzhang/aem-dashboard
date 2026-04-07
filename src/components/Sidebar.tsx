import {
  type Key,
  ListView,
  ListViewItem,
  Picker,
  PickerItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import { useState } from 'react';

const environments = [
  { key: 'production', label: 'Production' },
  { key: 'stage', label: 'Stage' },
  { key: 'development', label: 'Development' },
  { key: 'sandbox', label: 'Sandbox' },
  { key: 'preview', label: 'Preview' },
  { key: 'archive', label: 'Archive' },
  { key: 'staging', label: 'Staging' },
] as const;

const navigationItems = [
  { key: 'home', label: 'Home' },
  { key: 'assets', label: 'Assets' },
  { key: 'collections', label: 'Collections' },
  { key: 'insights', label: 'Insights' },
  { key: 'content-hub', label: 'Content Hub' },
] as const;

const sidebarStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  borderEndWidth: 1,
  borderStyle: 'solid',
  borderColor: 'gray-300',
});

const sidebarScrollStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  paddingTop: 20,
  paddingBottom: 16,
});

const pickerSectionStyle = style({
  flexShrink: 0,
  paddingX: 16,
  paddingBottom: 20,
});

const pickerStyle = style({
  width: 'full',
});

const navigationSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 0,
  paddingX: 8,
});

const navigationListStyle = style({
  height: 'full',
});

const navigationLabelStyle = style({
  display: 'flex',
  alignItems: 'center',
  minHeight: 24,
});

export default function Sidebar() {
  const [environment, setEnvironment] = useState<Key>('production');

  return (
    <Provider
      elementType="nav"
      colorScheme="dark"
      background="layer-2"
      styles={sidebarStyle}
      aria-label="Sidebar"
    >
      <div className={sidebarScrollStyle}>
        <div className={pickerSectionStyle}>
          <Picker
            label="Environment"
            aria-label="Select environment"
            isQuiet
            styles={pickerStyle}
            selectedKey={environment}
            onSelectionChange={(key) => {
              if (key != null) {
                setEnvironment(key);
              }
            }}
          >
            {environments.map((item) => (
              <PickerItem key={item.key} textValue={item.label}>
                {item.label}
              </PickerItem>
            ))}
          </Picker>
        </div>

        <div className={navigationSectionStyle}>
          <ListView
            aria-label="Application navigation"
            selectionMode="single"
            defaultSelectedKeys={['assets']}
            selectionStyle="highlight"
            isQuiet
            overflowMode="truncate"
            styles={navigationListStyle}
          >
            {navigationItems.map((item) => (
              <ListViewItem key={item.key} textValue={item.label}>
                <Text slot="label" styles={navigationLabelStyle}>
                  {item.label}
                </Text>
              </ListViewItem>
            ))}
          </ListView>
        </div>
      </div>
    </Provider>
  );
}
