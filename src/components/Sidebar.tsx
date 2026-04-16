import {
  Link,
  ListView,
  ListViewItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navShell = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'gray-75',
  borderEndWidth: 1,
  borderEndColor: 'gray-200',
  borderStyle: 'solid',
  display: 'flex',
  flexDirection: 'column',
});

const scrollColumn = style({
  paddingTop: 20,
  paddingBottom: 16,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const environmentBlock = style({
  paddingX: 16,
  paddingBottom: 20,
});

const labeledColumn = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  alignItems: 'stretch',
});

const listSection = style({
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

const environmentLabel = style({
  font: 'ui-sm',
  color: 'neutral-subdued',
});

function NavItemContent(props: { label: string }) {
  return <Text slot="label">{props.label}</Text>;
}

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navShell}>
        <div className={scrollColumn}>
          <div className={environmentBlock}>
            <div className={labeledColumn}>
              <Text styles={environmentLabel}>Environment</Text>
              <Link href="#" isQuiet isStandalone staticColor="white" onPress={() => {}}>
                Production
              </Link>
            </div>
          </div>

          <div className={listSection}>
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
                <NavItemContent label="Home" />
              </ListViewItem>
              <ListViewItem id="assets" textValue="Assets">
                <NavItemContent label="Assets" />
              </ListViewItem>
              <ListViewItem id="collections" textValue="Collections">
                <NavItemContent label="Collections" />
              </ListViewItem>
              <ListViewItem id="insights" textValue="Insights">
                <NavItemContent label="Insights" />
              </ListViewItem>
              <ListViewItem id="content-hub" textValue="Content Hub">
                <NavItemContent label="Content Hub" />
              </ListViewItem>
            </ListView>
          </div>
        </div>
      </nav>
    </Provider>
  );
}
