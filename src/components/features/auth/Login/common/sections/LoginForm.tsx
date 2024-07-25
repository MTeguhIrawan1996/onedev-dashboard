import { Paper, Text } from '@mantine/core';
import * as React from 'react';

import { FormLoginClient } from '@/components/features/auth/Login/common/ui/LoginFormClient';

export function LoginForm() {
  return (
    <Paper radius='md' p='xl' withBorder w={{ base: '80%', xs: 550 }}>
      <Text size='lg' fw={500} mb='xl'>
        Welcome Onedev Dashboard
      </Text>
      <FormLoginClient />
    </Paper>
  );
}
