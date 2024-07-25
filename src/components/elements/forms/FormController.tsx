import * as React from 'react';

import {
  PasswordInputRhf,
  TextAreaInputRhf,
  TextInputRhf,
} from '@/components/elements/inputs';

import { ControllerProps } from '@/types/forms-input-rhf';

export function FormController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'text-input':
      return <TextInputRhf {...props} />;
    case 'text-area':
      return <TextAreaInputRhf {...props} />;
    case 'password-input':
      return <PasswordInputRhf {...props} />;
    default:
      return null;
  }
}
