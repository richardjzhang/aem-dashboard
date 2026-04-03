import {
  type Key,
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
import { useState } from 'react';
import Home from '@spectrum-icons/workflow/Home';
import Edit from '@spectrum-icons/workflow/Edit';
import Cloud from '@spectrum-icons/workflow/Cloud';
import TrendInspect from '@spectrum-icons/workflow/TrendInspect';
import Apps from '@spectrum-icons/workflow/Apps';
import Extension from '@spectrum-icons/workflow/Extension';
import Settings from '@spectrum-icons/workflow/Settings';
import Target from '@spectrum-icons/workflow/Target';
import KeyIcon from '@spectrum-icons/workflow/Key';
import Shield from '@spectrum-icons/workflow/Shield';
import Globe from '@spectrum-icons/workflow/Globe';
import Document from '@spectrum-icons/workflow/Document';

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
  const [environment, setEnvironment] = useState<Key>('env1');

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
        <View
          paddingTop="size-200"
          paddingBottom="size-150"
          height="100%"
          minHeight={0}
          overflow="auto"
          UNSAFE_style={{ display: 'flex', flexDirection: 'column' }}
        >
          <View paddingX="size-200" paddingBottom="size-200">
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

          <View paddingX="size-100" flexGrow={1} minHeight={0}>
            <ListView
              aria-label="Application navigation"
              selectionMode="single"
              defaultSelectedKeys={['home']}
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
              <Item key="universal-editor" textValue="Universal Editor">
                <NavItemContent icon={<Edit {...iconProps} />} label="Universal Editor" />
              </Item>
              <Item key="cloud-manager" textValue="Cloud Manager">
                <NavItemContent icon={<Cloud {...iconProps} />} label="Cloud Manager" />
              </Item>
              <Item key="cloud-acceleration-manager" textValue="Cloud Acceleration Manager">
                <NavItemContent
                  icon={<TrendInspect {...iconProps} />}
                  label="Cloud Acceleration Manager"
                />
              </Item>
              <Item key="software-distribution" textValue="Software Distribution">
                <NavItemContent
                  icon={<Apps {...iconProps} />}
                  label="Software Distribution"
                />
              </Item>
              <Item key="extension-manager" textValue="Extension Manager">
                <NavItemContent icon={<Extension {...iconProps} />} label="Extension Manager" />
              </Item>

              <Section
                title={
                  <Heading level={4} marginTop="size-250" marginBottom="size-75">
                    Security and Compliance
                  </Heading>
                }
              >
                <Item key="security-health" textValue="Security Health">
                  <NavItemContent icon={<Settings {...iconProps} />} label="Security Health" />
                </Item>
                <Item key="penetration-tests" textValue="Penetration Tests">
                  <NavItemContent icon={<Target {...iconProps} />} label="Penetration Tests" />
                </Item>
                <Item key="customer-managed-keys" textValue="Customer Managed Keys">
                  <NavItemContent
                    icon={<KeyIcon {...iconProps} />}
                    label="Customer Managed Keys"
                  />
                </Item>
                <Item key="advanced-waf" textValue="Advanced WAF">
                  <NavItemContent icon={<Shield {...iconProps} />} label="Advanced WAF" />
                </Item>
                <Item key="cdn-traffic" textValue="CDN Traffic">
                  <NavItemContent icon={<Globe {...iconProps} />} label="CDN Traffic" />
                </Item>
                <Item key="security-documents" textValue="Security Documents">
                  <NavItemContent
                    icon={<Document {...iconProps} />}
                    label="Security Documents"
                  />
                </Item>
              </Section>
            </ListView>
          </View>
        </View>
      </View>
    </Provider>
  );
}
