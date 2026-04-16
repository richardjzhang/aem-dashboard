import { Link, ListView, ListViewItem, Provider, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navShell = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'gray-75',
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderStartWidth: 0,
  borderEndWidth: 1,
  borderColor: 'gray-200',
  borderStyle: 'solid',
});

const scrollColumn = style({
  paddingTop: 20,
  paddingBottom: 12,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const envBlock = style({
  paddingX: 12,
  paddingBottom: 20,
});

const envLabel = style({
  font: 'ui-sm',
  color: 'neutral-subdued',
});

const labeledValueStack = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 4,
  width: 'full',
});

const listWrapper = style({
  paddingX: 8,
  flexGrow: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
});

const listViewLayout = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navShell}>
        <div className={scrollColumn}>
          <div className={envBlock}>
            <div className={labeledValueStack}>
              <Text styles={envLabel}>Environment</Text>
              <Link isQuiet isStandalone staticColor="white" onPress={() => {}}>
                Production
              </Link>
            </div>
          </div>

          <div className={listWrapper}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={new Set(['assets'])}
              selectionStyle="highlight"
              isQuiet
              overflowMode="truncate"
              styles={listViewLayout}
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
