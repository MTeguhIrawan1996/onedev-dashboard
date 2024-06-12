'use client';

import {
  ActionIcon,
  Affix,
  AppShell,
  Container,
  Drawer,
  Group,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBurger, IconMoon } from '@tabler/icons-react';

import { Breadcrumb } from '@/components/layout/Dashboard/ui/Breadcrumb';
import { Navbar } from '@/components/layout/Dashboard/ui/Navbar';

export default function AppShellWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure(false);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  return (
    <AppShell header={{ height: 60 }} padding='md'>
      <AppShell.Header>
        <Group h='100%' px='md'>
          <IconBurger size={30} />
        </Group>
        <Breadcrumb />
      </AppShell.Header>
      <AppShell.Main>
        <Container fluid mt='xl' bg='var(--mantine-color-blue-light)'>
          {children}
        </Container>
      </AppShell.Main>
      <Affix position={{ top: 70, right: 20 }}>
        <Group>
          <ActionIcon
            size='xl'
            variant='light'
            aria-label='MoonIcon'
            onClick={() =>
              setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
            }
          >
            <IconMoon />
          </ActionIcon>
          <ActionIcon size='xl' aria-label='MenuIcon' onClick={toggle}>
            <IconBurger />
          </ActionIcon>
        </Group>
      </Affix>
      <Drawer
        position='left'
        opened={opened}
        onClose={toggle}
        size='xs'
        offset={15}
        overlayProps={{ backgroundOpacity: 0.1, blur: 0 }}
        withCloseButton={false}
      >
        <Navbar />
      </Drawer>
    </AppShell>
  );
}
