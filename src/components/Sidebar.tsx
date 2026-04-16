import { Link, ListView, ListViewItem, Provider, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };

const navShellStyle = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'gray-75',
  borderEndWidth: 1,
  borderEndColor: 'gray-200',
  borderStyle: 'solid',
  boxSizing: 'border-box',
});

const scrollColumnStyle = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
  paddingTop: 20,
  paddingBottom: 12,
});

const envBlockStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingX: 12,
  paddingBottom: 20,
  gap: 4,
  width: 'full',
});

const envLabelStyle = style({
  font: 'ui-sm',
  color: 'neutral-subdued',
});

const listSectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  minHeight: 0,
  paddingX: 8,
});

const listViewStyle = style({
  width: 'full',
  minHeight: 0,
  flexGrow: 1,
});

function NavItemLabel(props: { label: string }) {
  return <Text slot="label">{props.label}</Text>;
}

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navShellStyle}>
        <div className={scrollColumnStyle}>
          <div className={envBlockStyle}>
            <Text styles={envLabelStyle}>Environment</Text>
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
              styles={listViewStyle}
            >
              <ListViewItem id="home" textValue="Home">
                <NavItemLabel label="Home" />
              </ListViewItem>
              <ListViewItem id="assets" textValue="Assets">
                <NavItemLabel label="Assets" />
              </ListViewItem>
              <ListViewItem id="collections" textValue="Collections">
                <NavItemLabel label="Collections" />
              </ListViewItem>
              <ListViewItem id="insights" textValue="Insights">
                <NavItemLabel label="Insights" />
              </ListViewItem>
              <ListViewItem id="content-hub" textValue="Content Hub">
                <NavItemLabel label="Content Hub" />
              </ListViewItem>
            </ListView>
          </div>
        </div>
      </nav>
    </Provider>
  );
}
