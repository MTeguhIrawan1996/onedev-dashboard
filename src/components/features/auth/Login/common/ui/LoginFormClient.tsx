'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Group, Stack } from '@mantine/core';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { ButtonSubmitAction, FormController } from '@/components/elements';

import {
  ILoginTypeSchema,
  loginSchemaValidation,
} from '@/utils/validation/auth/auth-validation';

export function FormLoginClient() {
  const methods = useForm<ILoginTypeSchema>({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const handleSubmitForm: SubmitHandler<ILoginTypeSchema> = async () => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        <Stack>
          <FormController
            control='text-input'
            label='Email'
            name='email'
            placeholder='hello@one.dev'
            radius='md'
          />
          <FormController
            control='password-input'
            label='Password'
            name='password'
            placeholder='Your password'
            radius='md'
          />
        </Stack>
        <Group justify='flex-end' mt='xl'>
          <ButtonSubmitAction label='Login' type='submit' />
        </Group>
      </form>
    </FormProvider>
  );
}
