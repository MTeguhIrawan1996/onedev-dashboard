'use client';

import { TextInput } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import { ITextInputRhfProps } from '@/types/forms';

export function TextInputRhf({ name, ...rest }: ITextInputRhfProps) {
  const { field } = useController({ name });

  return <TextInput {...field} {...rest} />;
}
