import {
  ListView,
  ListViewItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navProviderStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  borderInlineEndWidth: 1,
  borderInlineEndStyle: 'solid',
  borderColor: 'gray-200',
});

const innerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  paddingBottom: 16,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
});

const envBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingX: 16,
  paddingBottom: 20,
});

const envLabelStyle = style({
  font: 'body',
  color: 'neutral-subdued',
});

const envValueStyle = style({
  font: 'body',
  color: 'neutral',
});

const listWrapStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 0,
  paddingX: 8,
});

const listStyles = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

export default function Sidebar() {
  return (
    <Provider
      colorScheme="dark"
      background="layer-1"
      elementType="nav"
      styles={navProviderStyle}
    >
      <div className={innerStyle}>
        <div className={envBlockStyle}>
          <Text styles={envLabelStyle}>Environment</Text>
          <Text styles={envValueStyle}>Production</Text>
        </div>

        <div className={listWrapStyle}>
          <ListView
            aria-label="Application navigation"
            selectionMode="single"
            defaultSelectedKeys={new Set(['assets'])}
            selectionStyle="highlight"
            density="compact"
            isQuiet
            overflowMode="truncate"
            styles={listStyles}
          >
            <ListViewItem id="home" textValue="Home">
              <Text>Home</Text>
            </ListViewItem>
            <ListViewItem id="assets" textValue="Assets">
              <Text>Assets</Text>
            </ListViewItem>
            <ListViewItem id="collections" textValue="Collections">
              <Text>Collections</Text>
            </ListViewItem>
            <ListViewItem id="insights" textValue="Insights">
              <Text>Insights</Text>
            </ListViewItem>
            <ListViewItem id="content-hub" textValue="Content Hub">
              <Text>Content Hub</Text>
            </ListViewItem>
          </ListView>
        </div>
      </div>
    </Provider>
  );
}
