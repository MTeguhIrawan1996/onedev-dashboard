import {
  Button,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import * as React from 'react';

export interface ILoginFormProps {}

export function LoginForm(props: ILoginFormProps) {
  return (
    <Paper radius='md' p='xl' withBorder {...props}>
      <Text size='lg' fw={500}>
        Welcome to Mantine, with
      </Text>
      <Divider label='Or continue with email' labelPosition='center' my='lg' />
      <form>
        <Stack>
          <TextInput
            required
            label='Email'
            placeholder='hello@mantine.dev'
            radius='md'
          />

          <PasswordInput
            required
            label='Password'
            placeholder='Your password'
            radius='md'
          />
        </Stack>

        <Group justify='space-between' mt='xl'>
          <Button type='submit' radius='xl'>
            Login
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
