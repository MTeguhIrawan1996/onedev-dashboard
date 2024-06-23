'use client';

import { AppShell, Box, Container, Group, Stack } from '@mantine/core';
import { IconBurger } from '@tabler/icons-react';

import {
  DrawerButton,
  SearchButtonMenu,
  ThemeButton,
} from '@/components/elements/buttons';
import { Breadcrumb } from '@/components/layout/Dashboard/ui/Breadcrumb';
import { Navbar } from '@/components/layout/Dashboard/ui/Navbar';

export default function AppShellWrapper({
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
                <ThemeButton />
                <DrawerButton drawerContent={<Navbar />} />
              </Group>
              <SearchButtonMenu w={300} fullWidth={false} mb={0} />
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
