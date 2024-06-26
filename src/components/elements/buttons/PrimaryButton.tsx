import { Button, ButtonProps } from '@mantine/core';
import * as React from 'react';

type IPrimaryButtonProps = {
  label: string;
} & ButtonProps &
  React.ComponentPropsWithRef<'button'>;

export function PrimaryButton({ label, ref, ...rest }: IPrimaryButtonProps) {
  return (
    <Button ref={ref} {...rest}>
      {label}
    </Button>
  );
}
