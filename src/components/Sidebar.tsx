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
});

const scrollColumnStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 20,
  paddingBottom: 12,
  height: 'full',
  minHeight: 0,
  overflow: 'auto',
});

const environmentBlockStyle = style({
  paddingX: 12,
  paddingBottom: 20,
});

const environmentStackStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'full',
  gap: 4,
});

const listWrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  paddingX: 8,
  flexGrow: 1,
  minHeight: 0,
});

const listViewChromeStyle = style({
  flexGrow: 1,
  minHeight: 0,
  width: 'full',
});

const labelRowStyle = style({
  color: 'neutral',
});

function NavRowLabel(props: { label: string }) {
  return (
    <Text slot="label" styles={labelRowStyle}>
      {props.label}
    </Text>
  );
}

export default function Sidebar() {
  return (
    <Provider colorScheme="dark">
      <nav className={navStyle}>
        <div className={scrollColumnStyle}>
          <div className={environmentBlockStyle}>
            <div className={environmentStackStyle}>
              <Text
                styles={style({
                  font: 'ui-sm',
                  color: 'neutral-subdued',
                  margin: 0,
                })}
              >
                Environment
              </Text>
              <Link
                isQuiet
                isStandalone
                staticColor="white"
                onPress={() => {}}
              >
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
              styles={listViewChromeStyle}
            >
              <ListViewItem id="home" textValue="Home">
                <NavRowLabel label="Home" />
              </ListViewItem>
              <ListViewItem id="assets" textValue="Assets">
                <NavRowLabel label="Assets" />
              </ListViewItem>
              <ListViewItem id="collections" textValue="Collections">
                <NavRowLabel label="Collections" />
              </ListViewItem>
              <ListViewItem id="insights" textValue="Insights">
                <NavRowLabel label="Insights" />
              </ListViewItem>
              <ListViewItem id="content-hub" textValue="Content Hub">
                <NavRowLabel label="Content Hub" />
              </ListViewItem>
            </ListView>
          </div>
        </div>
      </nav>
    </Provider>
  );
}
