import { Button, Text } from '@react-spectrum/s2';
import { style } from '@react-spectrum/s2/style' with { type: 'macro' };
import { useLocation, useNavigate, useParams } from 'react-router';
import AppShell from './AppShell';

const pageStackStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  maxWidth: 960,
});

const eyebrowStyle = style({
  font: 'heading',
  color: 'neutral-subdued',
});

const titleStyle = style({
  font: 'heading-xl',
  color: 'neutral',
});

const actionsStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

function formatSlug(slug: string | undefined) {
  if (!slug) {
    return 'Unknown item';
  }

  return slug
    .split('-')
    .filter(Boolean)
    .map((segment) => segment[0]?.toUpperCase() + segment.slice(1))
    .join(' ');
}

type DemoRoutePageProps = {
  sectionLabel: string;
  description: string;
};

export default function DemoRoutePage({ sectionLabel, description }: DemoRoutePageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const displayName = formatSlug(slug);

  return (
    <AppShell>
      <section className={pageStackStyle}>
        <div className={eyebrowStyle}>{sectionLabel}</div>
        <h1 className={titleStyle}>{displayName}</h1>

        <div className="app-surface-card app-detail-card">
          <Text>{description}</Text>
          <Text UNSAFE_style={{ color: 'var(--app-text-muted)', lineHeight: 1.5 }}>
            Route path: {location.pathname}
          </Text>
          <Text UNSAFE_style={{ color: 'var(--app-text-muted)', lineHeight: 1.5 }}>
            The page is intentionally minimal so the interview demo can show believable navigation
            without introducing product-specific business logic.
          </Text>
        </div>

        <div className={actionsStyle}>
          <Button variant="primary" fillStyle="outline" onPress={() => navigate('/')}>
            Back to dashboard
          </Button>
        </div>
      </section>
    </AppShell>
  );
}
