import {
  Provider,
  defaultTheme,
  Picker,
  Item,
  Section,
  ListView,
  Text,
  Heading,
  View,
} from '@adobe/react-spectrum';
import Home from '@spectrum-icons/workflow/Home';
import Edit from '@spectrum-icons/workflow/Edit';
import Cloud from '@spectrum-icons/workflow/Cloud';
import TrendInspect from '@spectrum-icons/workflow/TrendInspect';
import Apps from '@spectrum-icons/workflow/Apps';
import Extension from '@spectrum-icons/workflow/Extension';
import Settings from '@spectrum-icons/workflow/Settings';
import Target from '@spectrum-icons/workflow/Target';
import Key from '@spectrum-icons/workflow/Key';
import Shield from '@spectrum-icons/workflow/Shield';
import Globe from '@spectrum-icons/workflow/Globe';
import Document from '@spectrum-icons/workflow/Document';

const iconProps = { size: 'S' as const };

export default function Sidebar() {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <View
        elementType="nav"
        width={224}
        height="100%"
        minHeight={0}
        flexShrink={0}
        overflow="hidden"
        backgroundColor="gray-100"
        borderEndWidth="thin"
        borderEndColor="gray-300"
      >
        <View paddingY="size-100" height="100%" minHeight={0} UNSAFE_style={{ display: 'flex', flexDirection: 'column' }}>
          <View paddingX="size-200" paddingBottom="size-100">
            <Picker label="Select environment" placeholder="Select environment" isQuiet width="100%">
              <Item key="env1" textValue="Production">
                Production
              </Item>
              <Item key="env2" textValue="Staging">
                Staging
              </Item>
              <Item key="env3" textValue="Development">
                Development
              </Item>
            </Picker>
          </View>

          <ListView
            aria-label="Application navigation"
            selectionMode="single"
            defaultSelectedKeys={['home']}
            density="compact"
            isQuiet
            flexGrow={1}
            minHeight={0}
            width="100%"
            overflowMode="truncate"
          >
            <Item key="home" textValue="Home">
              <Home {...iconProps} />
              <Text>Home</Text>
            </Item>
            <Item key="universal-editor" textValue="Universal Editor">
              <Edit {...iconProps} />
              <Text>Universal Editor</Text>
            </Item>
            <Item key="cloud-manager" textValue="Cloud Manager">
              <Cloud {...iconProps} />
              <Text>Cloud Manager</Text>
            </Item>
            <Item key="cloud-acceleration-manager" textValue="Cloud Acceleration Manager">
              <TrendInspect {...iconProps} />
              <Text>Cloud Acceleration Manager</Text>
            </Item>
            <Item key="software-distribution" textValue="Software Distribution">
              <Apps {...iconProps} />
              <Text>Software Distribution</Text>
            </Item>
            <Item key="extension-manager" textValue="Extension Manager">
              <Extension {...iconProps} />
              <Text>Extension Manager</Text>
            </Item>

            <Section
              title={
                <Heading level={4} marginTop="size-200" marginBottom="size-50">
                  Security and Compliance
                </Heading>
              }
            >
              <Item key="security-health" textValue="Security Health">
                <Settings {...iconProps} />
                <Text>Security Health</Text>
              </Item>
              <Item key="penetration-tests" textValue="Penetration Tests">
                <Target {...iconProps} />
                <Text>Penetration Tests</Text>
              </Item>
              <Item key="customer-managed-keys" textValue="Customer Managed Keys">
                <Key {...iconProps} />
                <Text>Customer Managed Keys</Text>
              </Item>
              <Item key="advanced-waf" textValue="Advanced WAF">
                <Shield {...iconProps} />
                <Text>Advanced WAF</Text>
              </Item>
              <Item key="cdn-traffic" textValue="CDN Traffic">
                <Globe {...iconProps} />
                <Text>CDN Traffic</Text>
              </Item>
              <Item key="security-documents" textValue="Security Documents">
                <Document {...iconProps} />
                <Text>Security Documents</Text>
              </Item>
            </Section>
          </ListView>
        </View>
      </View>
    </Provider>
  );
}
