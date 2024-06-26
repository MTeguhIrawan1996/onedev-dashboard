import { TextareaProps, TextInputProps } from '@mantine/core';

type ICommonControlForm<T> = {
  name: string;
} & T;

export type ITextInputRhfProps = {
  control: 'text-input';
} & ICommonControlForm<Omit<TextInputProps, 'name'>>;

export type ITextAreaInputRhfProps = {
  control: 'text-area';
} & ICommonControlForm<Omit<TextareaProps, 'name'>>;

export type ControllerProps = ITextInputRhfProps | ITextAreaInputRhfProps;
