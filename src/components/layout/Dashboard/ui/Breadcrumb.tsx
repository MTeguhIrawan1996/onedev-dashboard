import { Breadcrumbs, Text } from '@mantine/core';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements/Link';

export interface IBreadcrumbProps {}

const items = [
  { title: 'Mantine', href: '#' },
  { title: 'Mantine hooks', href: '#' },
  { title: 'use-id', href: '#' },
].map((item, index) => (
  <PrimaryLink href={item.href} key={index}>
    <Text component='span' size='xs'>
      {item.title}
    </Text>
  </PrimaryLink>
));

export function Breadcrumb() {
  return (
    <Breadcrumbs
      p='sm'
      styles={(theme) => ({
        breadcrumb: {
          cursor: 'pointer',
          textDecoration: 'none',
          color: theme.colors.brown[6],
          fontSize: 14,
          '&:hover': {
            color: theme.colors.brown[4],
          },
          '&:last-of-type': {
            color: theme.colors.brown[4],
          },
        },
      })}
    >
      {items}
    </Breadcrumbs>
  );
}
