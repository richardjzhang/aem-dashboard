import type { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  href?: string;
}

export interface NavSection {
  id: string;
  title?: string;
  items: NavItem[];
}

export interface RecentItem {
  id: string;
  name: string;
  href: string;
  type: string;
  status: 'Ready' | 'Finished' | 'Running' | 'Error';
  lastAccessed: string;
}

export interface Announcement {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface AuthoringEnvironment {
  id: string;
  type: string;
  program: string;
  environment: string;
}
