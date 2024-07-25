'use client';

import {
  ActionIcon,
  AppShell,
  Box,
  Container,
  Group,
  Stack,
} from '@mantine/core';
import { IconBurger, IconLogout } from '@tabler/icons-react';

import {
  DrawerButton,
  SearchButtonMenu,
  ThemeButton,
} from '@/components/elements';
import { Breadcrumb } from '@/components/layout/dashboard/ui/Breadcrumb';
import { Navbar } from '@/components/layout/dashboard/ui/Navbar';

import { signout } from '@/app/(auth)/login/actions';

export function AppShellWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                <DrawerButton drawerContent={<Navbar />} />
              </Group>
              <SearchButtonMenu w={300} fullWidth={false} mb={0} />
              <ThemeButton />
              <ActionIcon
                size='md'
                variant='light'
                aria-label='Logout'
                onClick={async () => {
                  await signout();
                }}
              >
                <IconLogout
                  style={{ width: '70%', height: '70%' }}
                  stroke={1.2}
                />
              </ActionIcon>
            </Group>
          </Group>
          <Box px='md'>
            <Breadcrumb />
          </Box>
        </Stack>
      </AppShell.Header>
      <AppShell.Main
        style={{
          overflow: 'hidden',
        }}
      >
        <Container size='xl' mt={100}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
