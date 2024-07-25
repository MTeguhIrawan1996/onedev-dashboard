'use client';

import * as React from 'react';
import { useFormStatus } from 'react-dom';

import {
  IPrimaryButtonProps,
  PrimaryButton,
} from '@/components/elements/buttons/PrimaryButton';

export interface IAppProps extends IPrimaryButtonProps {}

export function ButtonSubmitAction(props: IAppProps) {
  const { pending } = useFormStatus();

  return <PrimaryButton loading={pending} {...props} />;
}
