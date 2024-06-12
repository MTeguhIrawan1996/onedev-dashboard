import { Badge, Breadcrumbs } from '@mantine/core';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements/Link';

export interface IBreadcrumbProps {}

const items = [{ title: 'Mantine', href: '#' }].map((item, index) => (
  <PrimaryLink href={item.href} key={index}>
    <Badge variant='light' size='xs' radius='sm' fz={8} fw={500} autoContrast>
      {item.title}
    </Badge>
  </PrimaryLink>
));

export function Breadcrumb() {
  return (
    <Breadcrumbs
      p='sm'
      separatorMargin={6}
      styles={(theme) => ({
        breadcrumb: {
          cursor: 'pointer',
          textDecoration: 'none',
          color: theme.colors.brown[6],
          '&:hover': {
            color: theme.colors.brown[4],
          },
        },
      })}
    >
      {items}
    </Breadcrumbs>
  );
}
