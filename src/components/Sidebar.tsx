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
  // Semantic dark surface (must live under Provider colorScheme="dark")
  backgroundColor: 'layer-1',
  borderEndWidth: 1,
  borderEndColor: 'gray-800',
  borderStyle: 'solid',
  boxSizing: 'border-box',
});

const scrollColumnStyle = style({
  paddingTop: 20,
  paddingBottom: 16,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const envBlockStyle = style({
  paddingX: 16,
  paddingBottom: 20,
  width: 'full',
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

const navItemTextStyle = style({
  color: 'neutral',
});

const listWrapperStyle = style({
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

function NavItemContent(props: { label: string }) {
  return <Text styles={navItemTextStyle}>{props.label}</Text>;
}

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navStyle}>
        <div className={scrollColumnStyle}>
          <div className={envBlockStyle}>
            <div className={envStackStyle}>
              <Text styles={envLabelStyle}>Environment</Text>
              <Link href="#" isQuiet isStandalone staticColor="white" onPress={() => {}}>
                Production
              </Link>
            </div>
          </div>

          <div className={listWrapperStyle}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={new Set(['assets'])}
              selectionStyle="highlight"
              isQuiet
              overflowMode="truncate"
              styles={listViewStyle}
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
