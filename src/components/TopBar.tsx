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
    <header className={topBarStyle} style={{ backgroundColor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
      <div className={logoStyle}>
        <img
          src="/adobe-logo.png"
          alt="Adobe logo"
          style={{ width: 24, height: 24, borderRadius: 6, flexShrink: 0 }}
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
            color: '#6e6e6e',
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
