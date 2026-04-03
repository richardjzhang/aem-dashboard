import { ActionButton, Button, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import ChevronLeft from '@react-spectrum/s2/icons/ChevronLeft';
import ChevronRight from '@react-spectrum/s2/icons/ChevronRight';
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };
import { mutedBody13Loose } from '../styles/mutedCopy';
import { useNavigate } from 'react-router';
import { announcements } from '../data/mock';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: 'full',
  minWidth: 0,
});

const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'full',
  minWidth: 0,
});

const headingStyle = style({
  font: 'heading',
  color: 'neutral',
});

const navStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

const cardStyle = style({
  display: 'flex',
  flexDirection: 'row',
  width: 'full',
  minWidth: 0,
  borderRadius: 'lg',
  overflow: 'hidden',
});

const cardImageStyle = style({
  width: 128,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const cardContentStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 20,
  flexGrow: 1,
  flexShrink: 1,
  minWidth: 0,
});

const cardTitleStyle = style({
  font: 'heading-sm',
  color: 'neutral',
});

function AnnouncementIllustration() {
  return (
    <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="10" width="35" height="50" rx="4" fill="#8F6CEC" opacity="0.7" />
      <rect x="25" y="5" width="35" height="50" rx="4" fill="#B494F7" opacity="0.5" />
      <rect x="50" y="25" width="30" height="30" rx="4" fill="#E8DCFE" opacity="0.8" />
      <circle cx="70" cy="20" r="8" fill="#D4BCFC" opacity="0.6" />
      <rect x="20" y="55" width="60" height="8" rx="2" fill="#E8DCFE" opacity="0.5" />
    </svg>
  );
}

export default function ProductAnnouncements() {
  const navigate = useNavigate();
  const announcement = announcements[0];

  return (
    <section className={sectionStyle}>
      <div className={headerStyle}>
        <h2 className={headingStyle}>Product announcements</h2>
        <div className={navStyle}>
          <ActionButton isQuiet aria-label="Previous" size="S">
            <ChevronLeft styles={iconStyle({ size: 'S' })} />
          </ActionButton>
          <ActionButton isQuiet aria-label="Next" size="S">
            <ChevronRight styles={iconStyle({ size: 'S' })} />
          </ActionButton>
        </div>
      </div>

      <div className={`${cardStyle} app-surface-card`}>
        <div className={`${cardImageStyle} app-announcement-panel`}>
          <AnnouncementIllustration />
        </div>
        <div className={cardContentStyle}>
          <div className={cardTitleStyle}>{announcement.title}</div>
          <Text UNSAFE_style={mutedBody13Loose}>{announcement.description}</Text>
          <div>
            <Button variant="accent" onPress={() => navigate(announcement.ctaHref)}>
              {announcement.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
