import { IconBulb, IconCheckbox, IconUser } from '@tabler/icons-react';

export const collections = [
  { emoji: '👍', label: 'Overview', href: '/overview' },
  { emoji: '🚚', label: 'Exampel', href: '/example' },
];

export const links = [
  {
    icon: IconBulb,
    label: 'Overview',
    notifications: 3,
    href: '/overview',
  },
  {
    icon: IconUser,
    label: 'Exampel',
    href: '/example',
  },
  {
    icon: IconCheckbox,
    label: 'Tasks',
    notifications: 4,
    href: '/task',
  },
  {
    icon: IconUser,
    label: 'Contacts',
    href: '/contact',
  },
];

export const breadcrumbs = [
  { key: '/overview', value: [{ title: 'Overview', href: '/overview' }] },
  { key: '/example', value: [{ title: 'Exampel', href: '/example' }] },
];
