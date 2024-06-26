'use client';

import { Textarea } from '@mantine/core';
import * as React from 'react';
import { useController } from 'react-hook-form';

import { ITextAreaInputRhfProps } from '@/types/forms';

export function TextAreaInputRhf({ name, ...rest }: ITextAreaInputRhfProps) {
  const { field } = useController({ name });

  return (
    <Textarea
      {...field}
      label='Text Area'
      description='Input description'
      placeholder='Input placeholder'
      {...rest}
    />
  );
}
