import {
  type Key,
  Provider,
  defaultTheme,
  Picker,
  Item,
  ListView,
  Text,
  Heading,
  View,
} from '@adobe/react-spectrum';
import { useState } from 'react';
import Home from '@spectrum-icons/workflow/Home';
import Images from '@spectrum-icons/workflow/Images';
import FolderOpen from '@spectrum-icons/workflow/FolderOpen';
import GraphTrend from '@spectrum-icons/workflow/GraphTrend';
import Globe from '@spectrum-icons/workflow/Globe';
import ViewAllTags from '@spectrum-icons/workflow/ViewAllTags';
import Report from '@spectrum-icons/workflow/Report';
import Workflow from '@spectrum-icons/workflow/Workflow';
import UserLock from '@spectrum-icons/workflow/UserLock';

const iconProps = { size: 'S' as const };

function NavItemContent(props: { icon: React.ReactNode; label: string }) {
  return (
    <View
      UNSAFE_style={{
        display: 'inline-flex',
        alignItems: 'center',
        columnGap: '12px',
        minWidth: 0,
      }}
    >
      {props.icon}
      <Text>{props.label}</Text>
    </View>
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
                <NavItemContent icon={<Home {...iconProps} />} label="Home" />
              </Item>
              <Item key="assets" textValue="Assets">
                <NavItemContent icon={<Images {...iconProps} />} label="Assets" />
              </Item>
              <Item key="collections" textValue="Collections">
                <NavItemContent icon={<FolderOpen {...iconProps} />} label="Collections" />
              </Item>
              <Item key="insights" textValue="Insights">
                <NavItemContent icon={<GraphTrend {...iconProps} />} label="Insights" />
              </Item>
              <Item key="content-hub" textValue="Content Hub">
                <NavItemContent icon={<Globe {...iconProps} />} label="Content Hub" />
              </Item>
            </ListView>

            <View
              marginTop="size-200"
              marginBottom="size-150"
              marginX="size-150"
              borderTopWidth="thin"
              borderTopColor="gray-300"
            />

            <Heading level={4} marginX="size-150" marginBottom="size-75">
              Admin Tools
            </Heading>

            <ListView
              aria-label="Admin tools navigation"
              selectionMode="none"
              density="compact"
              isQuiet
              width="100%"
              overflowMode="truncate"
            >
              <Item key="metadata-schemas" textValue="Metadata Schemas">
                <NavItemContent icon={<ViewAllTags {...iconProps} />} label="Metadata Schemas" />
              </Item>
              <Item key="reports" textValue="Reports">
                <NavItemContent icon={<Report {...iconProps} />} label="Reports" />
              </Item>
              <Item key="workflows" textValue="Workflows">
                <NavItemContent icon={<Workflow {...iconProps} />} label="Workflows" />
              </Item>
              <Item key="user-permissions" textValue="User Permissions">
                <NavItemContent icon={<UserLock {...iconProps} />} label="User Permissions" />
              </Item>
            </ListView>
          </View>
        </View>
      </View>
    </Provider>
  );
}
