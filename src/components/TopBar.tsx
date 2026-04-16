import {
  ActionButton,
  Avatar,
  Heading,
  Text,
} from '@react-spectrum/s2';
import { iconStyle, style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Bell from '@react-spectrum/s2/icons/Bell';
import Feedback from '@react-spectrum/s2/icons/Feedback';
import More from '@react-spectrum/s2/icons/More';

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
      <div
        className={style({
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          columnGap: topBarLayout.mainGap,
          minHeight: topBarLayout.minHeight,
          paddingX: topBarLayout.paddingInline,
          paddingY: topBarLayout.paddingBlock,
          width: '100%',
          flexShrink: 0,
        })}
      >
        <div
          className={style({
            display: 'flex',
            alignItems: 'center',
            columnGap: topBarLayout.logoClusterGap,
          })}
        >
          <img src="/adobe-logo.png" alt="Adobe logo" className="app-logo-mark" />
          <div
            className={style({
              display: 'flex',
              flexDirection: 'column',
              rowGap: topBarLayout.titleStackGap,
            })}
          >
            <Heading level={3} styles={style({ margin: 0 })}>
              Adobe Experience Manager
            </Heading>
            <Text styles={style({ margin: 0, color: 'neutral-subdued' })}>
              Foundation Internal
            </Text>
          </div>
        </div>

        <div
          className={style({
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            columnGap: topBarLayout.actionsGap,
            backgroundColor: 'white',
          })}
        >
          <ActionButton aria-label="Feedback">
            <Feedback styles={iconStyle({ size: 'M' })} />
            <Text>Feedback</Text>
          </ActionButton>
          <ActionButton isQuiet aria-label="Notifications">
            <Bell styles={iconStyle({ size: 'M' })} />
          </ActionButton>
          <ActionButton isQuiet aria-label="More options">
            <More styles={iconStyle({ size: 'M' })} />
          </ActionButton>
          <Avatar src="https://i.pravatar.cc/96?u=rick" alt="Rick" size={32} />
        </div>
      </div>
    </header>
  );
}
