import {
  Link,
  ListView,
  ListViewItem,
  Provider,
  Text,
} from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import { useHref, useNavigate } from 'react-router';

const navOuterStyle = style({
  width: 248,
  height: 'full',
  minHeight: 0,
  flexShrink: 0,
  overflow: 'hidden',
  backgroundColor: 'gray-75',
  borderEndWidth: 1,
  borderColor: 'gray-200',
});

const scrollColumnStyle = style({
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
  width: 'full',
});

const envLabelStyle = style({
  font: 'detail',
  color: 'neutral-subdued',
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

function NavItemContent(props: { label: string }) {
  return <Text>{props.label}</Text>;
}

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <Provider
      colorScheme="dark"
      background="layer-1"
      router={{ navigate, useHref }}
    >
      <nav className={navOuterStyle}>
        <div className={scrollColumnStyle}>
          <div className={envBlockStyle}>
            <Text styles={envLabelStyle}>Environment</Text>
            <Link isQuiet onPress={() => {}}>
              Production
            </Link>
          </div>

          <div className={listSectionStyle}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={['assets']}
              selectionStyle="highlight"
              isQuiet
              styles={listViewStyle}
              overflowMode="truncate"
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
