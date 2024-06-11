'use client';

import { ActionIcon, Affix, AppShell, Drawer, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBurger } from '@tabler/icons-react';

import Navbar from './ui/Navbar';

export default function AppShellWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <IconBurger size={30} />
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <Affix position={{ bottom: 20, left: 20 }}>
        <ActionIcon size='xl' aria-label='MenuIcon' onClick={toggle}>
          <IconBurger />
        </ActionIcon>
      </Affix>
      <Drawer
        opened={opened}
        onClose={toggle}
        size='sm'
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <Navbar />
      </Drawer>
    </AppShell>
  );
}
