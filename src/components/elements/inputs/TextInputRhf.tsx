'use client';

import { TextInput } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import classes from '@/components/elements/inputs/input.module.css';

import { FieldErrorMessage } from '@/components/elements/typography';

import { ITextInputRhfProps } from '@/types/forms-input-rhf';

export function TextInputRhf({ name, ...rest }: ITextInputRhfProps) {
  const { field, fieldState } = useController({ name });

  return (
    <TextInput
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
