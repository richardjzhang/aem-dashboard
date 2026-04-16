import { ActionButton, Avatar, Heading, Text } from '@react-spectrum/s2';
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

const topBarRowClass = style({
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
});

const logoClusterClass = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: topBarLayout.logoClusterGap,
});

const titleStackClass = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: topBarLayout.titleStackGap,
});

const actionsRowClass = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  columnGap: topBarLayout.actionsGap,
  backgroundColor: 'white',
});

const headingStyles = style({ margin: 0 });
const subtitleStyles = style({ margin: 0, color: 'neutral-subdued' });
const actionIconStyles = iconStyle({ size: 'M' });

export default function TopBar() {
  return (
    <header className="app-top-bar">
      <div className={topBarRowClass}>
        <div className={logoClusterClass}>
          <img src="/adobe-logo.png" alt="Adobe logo" className="app-logo-mark" />
          <div className={titleStackClass}>
            <Heading level={3} styles={headingStyles}>
              Adobe Experience Manager
            </Heading>
            <Text styles={subtitleStyles}>Foundation Internal</Text>
          </div>
        </div>

        <div className={actionsRowClass}>
          <ActionButton aria-label="Feedback">
            <Feedback styles={actionIconStyles} />
            <Text>Feedback</Text>
          </ActionButton>
          <ActionButton isQuiet aria-label="Notifications">
            <Bell styles={actionIconStyles} />
          </ActionButton>
          <ActionButton isQuiet aria-label="More options">
            <More styles={actionIconStyles} />
          </ActionButton>
          <Avatar src="https://i.pravatar.cc/96?u=rick" alt="Rick" size={32} />
        </div>
      </div>
    </header>
  );
}
