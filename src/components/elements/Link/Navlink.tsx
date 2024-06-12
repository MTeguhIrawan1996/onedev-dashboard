import { Text } from '@mantine/core';
import * as React from 'react';

import clasess from '@/components/elements/Link/Link.module.css';

import { PrimaryLink } from '@/components/elements/Link/PrimaryLink';

interface INavlinkProps {
  leftIcon?: React.ReactNode;
  label: string;
  href: string;
}

export const Navlink: React.FC<INavlinkProps> = ({ leftIcon, label, href }) => {
  return (
    <PrimaryLink href={href} className={clasess.navlink}>
      {leftIcon && leftIcon}
      <Text size='sm' fw={500} component='span'>
        {label}
      </Text>
    </PrimaryLink>
  );
};
