'use client';

import { ActionIcon, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBurger } from '@tabler/icons-react';
import * as React from 'react';

interface IDrawerButtonProps {
  drawerContent?: React.ReactNode;
}

export function DrawerButton({ drawerContent }: IDrawerButtonProps) {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <ActionIcon
        size='md'
        variant='light'
        aria-label='MenuIcon'
        onClick={toggle}
      >
        <IconBurger style={{ width: '70%', height: '70%' }} stroke={1.2} />
      </ActionIcon>
      <Drawer
        position='left'
        opened={opened}
        onClose={toggle}
        size='xs'
        offset={15}
        overlayProps={{ backgroundOpacity: 0.1, blur: 0 }}
        withCloseButton={false}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
