import {
  ActionButton,
  Avatar,
  Flex,
  Heading,
  Provider,
  Text,
  View,
  defaultTheme,
} from '@adobe/react-spectrum';
import Bell from '@spectrum-icons/workflow/Bell';
import Feedback from '@spectrum-icons/workflow/Feedback';
import More from '@spectrum-icons/workflow/More';

/** Top bar spacing in px (matches prior S2 top bar). */
const topBarLayout = {
  minHeight: 64,
  paddingInline: 24,
  paddingBlock: 12,
  mainGap: 12,
  logoClusterGap: 12,
  titleStackGap: 2,
  actionsGap: 4,
} as const;

export default function TopBar() {
  return (
    <header className="app-top-bar">
      <View
        width="100%"
        flexShrink={0}
        UNSAFE_style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          columnGap: topBarLayout.mainGap,
          minHeight: topBarLayout.minHeight,
          paddingInline: topBarLayout.paddingInline,
          paddingBlock: topBarLayout.paddingBlock,
        }}
      >
        <Flex
          alignItems="center"
          UNSAFE_style={{ columnGap: topBarLayout.logoClusterGap }}
        >
          <img src="/adobe-logo.png" alt="Adobe logo" className="app-logo-mark" />
          <Flex
            direction="column"
            UNSAFE_style={{ rowGap: topBarLayout.titleStackGap }}
          >
            <Heading level={3} margin={0}>
              Adobe Experience Manager
            </Heading>
            <Text margin={0} UNSAFE_style={{ color: 'var(--spectrum-alias-text-color-neutral-subdued)' }}>
              Foundation Internal
            </Text>
          </Flex>
        </Flex>

        <Provider theme={defaultTheme} colorScheme="light">
          <Flex
            alignItems="center"
            flexShrink={0}
            UNSAFE_style={{
              columnGap: topBarLayout.actionsGap,
              backgroundColor: 'var(--spectrum-global-color-static-white)',
            }}
          >
            <ActionButton aria-label="Feedback">
              <Feedback />
              <Text>Feedback</Text>
            </ActionButton>
            <ActionButton isQuiet aria-label="Notifications">
              <Bell />
            </ActionButton>
            <ActionButton isQuiet aria-label="More options">
              <More />
            </ActionButton>
            <Avatar src="https://i.pravatar.cc/96?u=rick" alt="Rick" size={32} />
          </Flex>
        </Provider>
      </View>
    </header>
  );
}
