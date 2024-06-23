// eslint-disable-next-line simple-import-sort/imports
import { Text } from '@mantine/core';
import * as React from 'react';

import { PrimaryLink } from '@/components/elements/links/PrimaryLink';
import clasess from './Link.module.css';

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
