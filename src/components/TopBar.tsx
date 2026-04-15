import { ActionButton, Avatar, Heading, Text } from '@react-spectrum/s2';
import { iconStyle, style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Bell from '@react-spectrum/s2/icons/Bell';
import Feedback from '@react-spectrum/s2/icons/Feedback';
import More from '@react-spectrum/s2/icons/More';

/** Top bar spacing in px (matches prior S2 top bar). */
const topBarRootStyle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: 12,
  minHeight: 64,
  paddingX: 24,
  paddingY: 12,
  width: 'full',
  flexShrink: 0,
});

const logoClusterStyle = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: 12,
});

const titleStackStyle = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 2,
});

const subtitleTextStyle = style({
  color: 'neutral-subdued',
  font: 'body',
});

const actionsRowStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  columnGap: 4,
});

const toolbarIcon = iconStyle({ size: 'S' });

export default function TopBar() {
  return (
    <header className="app-top-bar">
      <div className={topBarRootStyle}>
        <div className={logoClusterStyle}>
          <img src="/adobe-logo.png" alt="Adobe logo" className="app-logo-mark" />
          <div className={titleStackStyle}>
            <Heading level={3}>Adobe Experience Manager</Heading>
            <Text styles={subtitleTextStyle}>Foundation Internal</Text>
          </div>
        </div>

        <div className={actionsRowStyle}>
          <ActionButton aria-label="Feedback">
            <Feedback styles={toolbarIcon} />
            <Text>Feedback</Text>
          </ActionButton>
          <ActionButton isQuiet aria-label="Notifications">
            <Bell styles={toolbarIcon} />
          </ActionButton>
          <ActionButton isQuiet aria-label="More options">
            <More styles={toolbarIcon} />
          </ActionButton>
          <Avatar src="https://i.pravatar.cc/96?u=rick" alt="Rick" size={32} />
        </div>
      </div>
    </header>
  );
}
