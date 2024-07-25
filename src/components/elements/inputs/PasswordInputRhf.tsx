'use client';

import { PasswordInput } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import classes from '@/components/elements/inputs/input.module.css';

import { FieldErrorMessage } from '@/components/elements/typography';

import { IPasswordInputRhfProps } from '@/types/forms-input-rhf';

export function PasswordInputRhf({ name, ...rest }: IPasswordInputRhfProps) {
  const { field, fieldState } = useController({ name });

  return (
    <PasswordInput
      {...field}
      classNames={{
        error: classes.error,
        input: classes.input,
      }}
      error={
        fieldState &&
        fieldState.error && (
          <FieldErrorMessage>{fieldState.error.message}</FieldErrorMessage>
        )
      }
      {...rest}
    />
  );
}
