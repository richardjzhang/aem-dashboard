import {
  type Key,
  Provider,
  defaultTheme,
  Picker,
  Item,
  ListView,
  Text,
  View,
} from '@adobe/react-spectrum';
import { useState } from 'react';
function NavItemContent(props: { label: string }) {
  return (
    <Text>{props.label}</Text>
  );
}

export default function Sidebar() {
  const [environment, setEnvironment] = useState<Key>('production');

  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <View
        elementType="nav"
        width={248}
        height="100%"
        minHeight={0}
        flexShrink={0}
        overflow="hidden"
        backgroundColor="gray-75"
        borderEndWidth="thin"
        borderEndColor="gray-200"
      >
        <View
          paddingTop="size-250"
          paddingBottom="size-200"
          height="100%"
          minHeight={0}
          overflow="auto"
          UNSAFE_style={{ display: 'flex', flexDirection: 'column' }}
        >
          <View paddingX="size-200" paddingBottom="size-250">
            <Picker
              label="Environment"
              aria-label="Select environment"
              isQuiet
              width="100%"
              selectedKey={environment}
              onSelectionChange={(key) => {
                if (key != null) {
                  setEnvironment(key);
                }
              }}
            >
              <Item key="production" textValue="Production">
                Production
              </Item>
              <Item key="stage" textValue="Stage">
                Stage
              </Item>
              <Item key="development" textValue="Development">
                Development
              </Item>
              <Item key="sandbox" textValue="Sandbox">
                Sandbox
              </Item>
              <Item key="preview" textValue="Preview">
                Preview
              </Item>
              <Item key="archive" textValue="Archive">
                Archive
              </Item>
              <Item key="staging" textValue="Staging">
                Staging
              </Item>
            </Picker>
          </View>

          <View paddingX="size-100" flexGrow={1} minHeight={0} UNSAFE_style={{ display: 'flex', flexDirection: 'column' }}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={['assets']}
              selectionStyle="highlight"
              density="compact"
              isQuiet
              flexGrow={1}
              minHeight={0}
              width="100%"
              overflowMode="truncate"
            >
              <Item key="home" textValue="Home">
                <NavItemContent label="Home" />
              </Item>
              <Item key="assets" textValue="Assets">
                <NavItemContent label="Assets" />
              </Item>
              <Item key="collections" textValue="Collections">
                <NavItemContent label="Collections" />
              </Item>
              <Item key="insights" textValue="Insights">
                <NavItemContent label="Insights" />
              </Item>
              <Item key="content-hub" textValue="Content Hub">
                <NavItemContent label="Content Hub" />
              </Item>
            </ListView>
          </View>
        </View>
      </View>
    </Provider>
  );
}
