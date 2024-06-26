import { Modal, ModalProps } from '@mantine/core';
import * as React from 'react';

interface ICommonModalProps extends ModalProps {
  children?: React.ReactNode;
}

export function CommonModal({
  opened,
  onClose,
  children,
  size = 'xl',
  ...rest
}: ICommonModalProps) {
  return (
    <Modal opened={opened} onClose={onClose} size={size} {...rest}>
      {children}
    </Modal>
  );
}
