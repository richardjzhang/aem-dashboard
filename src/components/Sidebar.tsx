import {
  Link,
  ListView,
  ListViewItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import type { Key } from '@react-types/shared';

const navRootStyle = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  borderEndWidth: 1,
  borderEndColor: 'gray-300',
});

const navScrollStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  paddingBottom: 16,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
});

const envSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingX: 16,
  paddingBottom: 20,
  width: 'full',
});

const envLabelStyle = style({
  color: 'neutral-subdued',
  font: 'body-xs',
});

const listSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingX: 8,
  flexGrow: 1,
  minHeight: 0,
});

const listViewStyle = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

const defaultNavKeys = new Set<Key>(['assets']);

export default function Sidebar() {
  return (
    <Provider colorScheme="dark" background="layer-1" elementType="nav" styles={navRootStyle}>
      <div className={navScrollStyle}>
        <div className={envSectionStyle}>
          <div className={envLabelStyle}>Environment</div>
          <Link isQuiet href="#" onPress={() => {}}>
            <Text>Production</Text>
          </Link>
        </div>

        <div className={listSectionStyle}>
          <ListView
            aria-label="Application navigation"
            selectionMode="single"
            defaultSelectedKeys={defaultNavKeys}
            selectionStyle="highlight"
            isQuiet
            overflowMode="truncate"
            styles={listViewStyle}
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
