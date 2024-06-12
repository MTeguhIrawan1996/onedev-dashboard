'use client';

import {
  ActionIcon,
  AppShell,
  Box,
  Container,
  Drawer,
  Group,
  Stack,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBurger, IconMoon } from '@tabler/icons-react';

import { SearchButtonMenu } from '@/components/elements/Button';
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
    <AppShell header={{ height: 'fit-content' }} padding='md'>
      <AppShell.Header withBorder={false}>
        <Stack gap={0}>
          <Group
            p='sm'
            style={{ borderBottom: '1px solid var(--app-shell-border-color)' }}
            justify='space-between'
          >
            <IconBurger size={30} />
            <Group>
              <Group>
                <ActionIcon
                  size='md'
                  variant='light'
                  aria-label='MoonIcon'
                  onClick={() =>
                    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
                  }
                >
                  <IconMoon
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.2}
                  />
                </ActionIcon>
                <ActionIcon size='md' aria-label='MenuIcon' onClick={toggle}>
                  <IconBurger
                    style={{ width: '70%', height: '70%' }}
                    stroke={1.2}
                  />
                </ActionIcon>
              </Group>
              <SearchButtonMenu w={300} fullWidth={false} mb={0} />
            </Group>
          </Group>
          <Box px='md'>
            <Breadcrumb />
          </Box>
        </Stack>
      </AppShell.Header>
      <AppShell.Main>
        <Container size='xl' mt={100}>
          {children}
        </Container>
      </AppShell.Main>
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
