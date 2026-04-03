import type { RecentItem, Announcement, AuthoringEnvironment } from './types';

export const recentItems: RecentItem[] = [
  {
    id: '1',
    name: 'FoundationInternal-GA',
    href: '/programs/foundation-internal-ga',
    type: 'Program',
    status: 'Ready',
    lastAccessed: 'Aug 6, 2025',
  },
  {
    id: '2',
    name: 'WebTier to Dev',
    href: '/pipelines/webtier-to-dev',
    type: 'Pipeline execution',
    status: 'Finished',
    lastAccessed: 'Aug 5, 2025',
  },
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Welcome to Experience Hub',
    description:
      'Serving as the central hub for Adobe Experience Manager, the Experience Hub is designed to deliver a personalized experience, letting you navigate the AEM ecosystem seamlessly according to your roles and goals.',
    ctaLabel: 'Learn More',
    ctaHref: '/announcements/experience-hub',
  },
];

export const authoringEnvironments: AuthoringEnvironment[] = [
  {
    id: '1',
    type: 'Program',
    program: 'FoundationInternal-GA',
    environment: 'Production',
  },
];

export const userName = 'Rick';
