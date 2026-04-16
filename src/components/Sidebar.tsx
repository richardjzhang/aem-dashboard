import {
  Link,
  ListView,
  ListViewItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navStyle = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'layer-1',
  borderEndWidth: 1,
  borderEndColor: 'gray-800',
  borderStyle: 'solid',
  boxSizing: 'border-box',
});

const scrollColumnStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  paddingBottom: 12,
  height: 'full',
  minHeight: 0,
  minWidth: 0,
  overflowX: 'hidden',
  overflowY: 'auto',
});

const environmentBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  paddingX: 12,
  paddingBottom: 20,
  minWidth: 0,
});

const listSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 0,
  minWidth: 0,
  maxWidth: 'full',
  overflow: 'hidden',
  paddingX: 8,
});

const listViewStyles = style({
  flexGrow: 1,
  minHeight: 0,
  minWidth: 0,
  maxWidth: 'full',
  width: 'full',
});

const labelTextStyle = style({
  font: 'ui-sm',
  color: 'neutral-subdued',
  margin: 0,
});

const rowLabelStyle = style({
  color: 'neutral',
});

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navStyle}>
        <div className={scrollColumnStyle}>
          <div className={environmentBlockStyle}>
            <Text styles={labelTextStyle}>Environment</Text>
            <Link isQuiet isStandalone staticColor="white" onPress={() => {}}>
              Production
            </Link>
          </div>

          <div className={listSectionStyle}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={new Set(['assets'])}
              selectionStyle="highlight"
              isQuiet
              overflowMode="truncate"
              styles={listViewStyles}
            >
              <ListViewItem id="home" textValue="Home">
                <Text slot="label" styles={rowLabelStyle}>
                  Home
                </Text>
              </ListViewItem>
              <ListViewItem id="assets" textValue="Assets">
                <Text slot="label" styles={rowLabelStyle}>
                  Assets
                </Text>
              </ListViewItem>
              <ListViewItem id="collections" textValue="Collections">
                <Text slot="label" styles={rowLabelStyle}>
                  Collections
                </Text>
              </ListViewItem>
              <ListViewItem id="insights" textValue="Insights">
                <Text slot="label" styles={rowLabelStyle}>
                  Insights
                </Text>
              </ListViewItem>
              <ListViewItem id="content-hub" textValue="Content Hub">
                <Text slot="label" styles={rowLabelStyle}>
                  Content Hub
                </Text>
              </ListViewItem>
            </ListView>
          </div>
        </div>
      </nav>
    </Provider>
  );
}
