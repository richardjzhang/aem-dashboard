import { ActionButton, Button, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import ChevronLeft from '@react-spectrum/s2/icons/ChevronLeft';
import ChevronRight from '@react-spectrum/s2/icons/ChevronRight';
import { iconStyle } from '@react-spectrum/s2/style' with { type: 'macro' };
import { announcements } from '../data/mock';

const sectionStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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
  borderRadius: 'lg',
  overflow: 'hidden',
});

const cardImageStyle = style({
  width: 160,
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

      <div className={cardStyle} style={{ backgroundColor: '#fff', border: '1px solid #e0e0e0' }}>
        <div className={cardImageStyle} style={{ backgroundColor: '#1b1463' }}>
          <AnnouncementIllustration />
        </div>
        <div className={cardContentStyle}>
          <div className={cardTitleStyle}>{announcement.title}</div>
          <Text UNSAFE_style={{ fontSize: 13, color: '#6e6e6e', lineHeight: 1.5 }}>
            {announcement.description}
          </Text>
          <div>
            <Button variant="accent" href={announcement.ctaHref}>
              {announcement.ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
