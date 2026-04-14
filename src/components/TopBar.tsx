import { ActionButton, Avatar, Provider, Text, defaultTheme } from '@adobe/react-spectrum';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Bell from '@spectrum-icons/workflow/Bell';
import Feedback from '@spectrum-icons/workflow/Feedback';
import More from '@spectrum-icons/workflow/More';

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

      <Provider theme={defaultTheme} colorScheme="light">
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
      </Provider>
    </header>
  );
}