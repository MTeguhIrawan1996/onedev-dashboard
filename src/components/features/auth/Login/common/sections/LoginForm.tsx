import {
  Button,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import * as React from 'react';

import { emailLogin } from '@/app/(auth)/login/actions';

export function LoginForm() {
  return (
    <Paper radius='md' p='xl' withBorder w='40%'>
      <Text size='lg' fw={500} mb='xl'>
        Welcome Onedev Dashboard
      </Text>
      <form>
        <Stack>
          <TextInput
            required
            label='Email'
            name='email'
            placeholder='hello@mantine.dev'
            radius='md'
          />
          <PasswordInput
            required
            label='Password'
            name='password'
            placeholder='Your password'
            radius='md'
          />
        </Stack>
        <Group justify='flex-end' mt='xl'>
          <Button formAction={emailLogin} type='submit'>
            Login
          </Button>
          {/* <Button formAction={signup} type='submit'>
            Signup
          </Button> */}
        </Group>
      </form>
    </Paper>
  );
}
