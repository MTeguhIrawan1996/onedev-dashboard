'use client';

import { Container, Group } from '@mantine/core';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container size='xl' h='100vh'>
      <Group h='100%' justify='center'>
        {children}
      </Group>
    </Container>
  );
}
