import { ActionButton, Avatar, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import Feedback from '@react-spectrum/s2/icons/Feedback';
import Bell from '@react-spectrum/s2/icons/Bell';
import More from '@react-spectrum/s2/icons/More';
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };

/** Matches main content horizontal padding in Dashboard. */
const topBarStyle = style({
  display: 'flex',
  alignItems: 'center',
  height: 48,
  paddingX: 32,
  gap: 12,
  flexShrink: 0,
});

const logoStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const spacerStyle = style({
  flexGrow: 1,
});

const rightActionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export default function TopBar() {
  return (
    <header className={`${topBarStyle} app-top-bar`}>
      <div className={logoStyle}>
        <img
          src="/adobe-logo.png"
          alt="Adobe logo"
          className="app-logo-mark"
        />
        <Text
          UNSAFE_style={{
            fontSize: 14,
            fontWeight: 700,
            whiteSpace: 'nowrap',
          }}
        >
          Adobe Experience Manager
        </Text>
      </div>

      <div className={style({ display: 'flex', alignItems: 'center', gap: 8, paddingStart: 8 })}>
        <Text
          UNSAFE_style={{
            fontSize: 13,
            color: 'var(--app-text-muted)',
            whiteSpace: 'nowrap',
          }}
        >
          Foundation Internal
        </Text>
      </div>

      <div className={spacerStyle} />

      <div className={rightActionsStyle}>
        <ActionButton isQuiet aria-label="Feedback">
          <Feedback styles={iconStyle({ size: 'S' })} />
          <Text>Feedback</Text>
        </ActionButton>
        <ActionButton isQuiet aria-label="Notifications">
          <Bell styles={iconStyle({ size: 'S' })} />
        </ActionButton>
        <ActionButton isQuiet aria-label="More options">
          <More styles={iconStyle({ size: 'S' })} />
        </ActionButton>
        <Avatar src="https://i.pravatar.cc/96?u=rick" alt="Rick" size={32} />
      </div>
    </header>
  );
}
