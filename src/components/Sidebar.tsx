import { Link, ListView, ListViewItem, Provider, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navRootStyle = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'gray-75',
  borderEndWidth: 1,
  borderEndColor: 'gray-200',
  borderStyle: 'solid',
});

const scrollColumnStyle = style({
  paddingTop: 20,
  paddingBottom: 12,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const envBlockStyle = style({
  paddingX: 12,
  paddingBottom: 20,
});

const envStackStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  width: 'full',
});

const envLabelStyle = style({
  font: 'ui-sm',
  color: 'neutral-subdued',
});

const listSectionStyle = style({
  paddingX: 8,
  flexGrow: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
});

const listViewFillStyle = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navRootStyle}>
        <div className={scrollColumnStyle}>
          <div className={envBlockStyle}>
            <div className={envStackStyle}>
              <Text styles={envLabelStyle}>Environment</Text>
              <Link isQuiet isStandalone staticColor="white" onPress={() => {}}>
                Production
              </Link>
            </div>
          </div>

          <div className={listSectionStyle}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={new Set(['assets'])}
              selectionStyle="highlight"
              isQuiet
              overflowMode="truncate"
              styles={listViewFillStyle}
            >
              <ListViewItem id="home" textValue="Home">
                <Text slot="label">Home</Text>
              </ListViewItem>
              <ListViewItem id="assets" textValue="Assets">
                <Text slot="label">Assets</Text>
              </ListViewItem>
              <ListViewItem id="collections" textValue="Collections">
                <Text slot="label">Collections</Text>
              </ListViewItem>
              <ListViewItem id="insights" textValue="Insights">
                <Text slot="label">Insights</Text>
              </ListViewItem>
              <ListViewItem id="content-hub" textValue="Content Hub">
                <Text slot="label">Content Hub</Text>
              </ListViewItem>
            </ListView>
          </div>
        </div>
      </nav>
    </Provider>
  );
}
