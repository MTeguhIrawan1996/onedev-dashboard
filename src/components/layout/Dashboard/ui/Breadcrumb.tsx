import { Badge, Breadcrumbs, MantineTheme } from '@mantine/core';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements/Link';

import { breadcrumbs } from '@/utils/constans/dashboardNavigation';

export function Breadcrumb() {
  const pathname = usePathname();
  const breadcrumbItem = breadcrumbs.find((v) => v.key === pathname);

  const items = breadcrumbItem?.value.map((item, index) => (
    <PrimaryLink href={item.href} key={index}>
      <Badge variant='light' size='xs' radius='sm' fz={8} fw={500} autoContrast>
        {item.title}
      </Badge>
    </PrimaryLink>
  ));

  return (
    <Breadcrumbs
      p='sm'
      separatorMargin={6}
      styles={(theme: MantineTheme) => ({
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
