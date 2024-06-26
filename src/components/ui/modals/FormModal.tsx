import { ModalProps, SimpleGrid, Stack } from '@mantine/core';
import * as React from 'react';
import { FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form';

import { PrimaryButton } from '@/components/elements/buttons';
import { FormController } from '@/components/elements/forms';
import { CommonModal } from '@/components/ui/templates';

interface IFormModalProps extends ModalProps {
  methods: UseFormReturn<any>;
  submitForm: SubmitHandler<any>;
  isLoading?: boolean;
}

export function FormModal({
  opened,
  onClose,
  methods,
  submitForm,
  isLoading,
  ...rest
}: IFormModalProps) {
  return (
    <CommonModal opened={opened} onClose={onClose} {...rest}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          <Stack justify='flex-start' align='flex-end' gap='xl'>
            <SimpleGrid cols={2} w='100%'>
              <FormController control='text-input' name='title' label='Title' />
              <FormController
                control='text-input'
                name='author'
                label='Author'
              />
            </SimpleGrid>
            <PrimaryButton type='submit' label='Submit' loading={isLoading} />
          </Stack>
        </form>
      </FormProvider>
    </CommonModal>
  );
}
