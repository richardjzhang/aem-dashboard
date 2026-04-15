import { ActionButton, Avatar, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Bell from '@react-spectrum/s2/icons/Bell';
import Feedback from '@react-spectrum/s2/icons/Feedback';
import More from '@react-spectrum/s2/icons/More';

const topBarStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 64,
  paddingX: 24,
  paddingY: 12,
  gap: 12,
  flexShrink: 0,
});

const logoStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

const brandTextStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
});

const titleStyle = style({
  font: 'heading-sm',
  color: 'neutral',
});

const subtitleStyle = style({
  color: 'neutral-subdued',
  font: 'body',
});

const rightActionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexShrink: 0,
  backgroundColor: 'white',
});

export default function TopBar() {
  return (
    <header className={`${topBarStyle} app-top-bar`}>
      <div className={logoStyle}>
        <img src="/adobe-logo.png" alt="Adobe logo" className="app-logo-mark" />
        <div className={brandTextStyle}>
          <div className={titleStyle}>Adobe Experience Manager</div>
          <div className={subtitleStyle}>Foundation Internal</div>
        </div>
      </div>

      <div className={rightActionsStyle}>
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
      </div>
    </header>
  );
}
