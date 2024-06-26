import * as React from 'react';

import { TextAreaInputRhf, TextInputRhf } from '@/components/elements/inputs';

import { ControllerProps } from '@/types/forms';

export function FormController(props: ControllerProps) {
  const { control } = props;

  switch (control) {
    case 'text-input':
      return <TextInputRhf {...props} />;
    case 'text-area':
      return <TextAreaInputRhf {...props} />;
    default:
      return null;
  }
}
