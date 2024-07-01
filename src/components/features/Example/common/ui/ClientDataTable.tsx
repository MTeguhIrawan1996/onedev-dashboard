/* eslint-disable no-console */

'use client';

import { Box, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { onlineManager, useQueryClient } from '@tanstack/react-query';
import { useQueryStates } from 'nuqs';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CommonDataTable } from '@/components/elements/data-tables';
import { FormModal } from '@/components/ui/modals/FormModal';
import { ControlPanel } from '@/components/ui/templates';
import { DashboardWrapper } from '@/components/ui/wrapper';

import actionRevalidate from '@/services/actionRevalidate';
import {
  ExampelValues,
  mutationExample,
  useMutationExampel,
} from '@/services/rest-api/useCreateExample';
import { IExampleResponse } from '@/services/rest-api/useReadAllExample';
import { examplesParsers } from '@/utils/lib/searchParams';

type IProps = {
  data: IExampleResponse[];
};

export function ClientDataTable({ data }: IProps) {
  const [queryParams, setQueryParams] = useQueryStates(examplesParsers, {
    shallow: false,
  });
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();

  const { l, p } = queryParams;

  const methods = useForm<any>({
    // resolver: zodResolver(locationMutationValidation),
    defaultValues: {
      title: '',
      author: '',
    },
    mode: 'onBlur',
  });

  const { mutate, isPaused, isPending } = useMutationExampel({
    onSuccess: () => {
      console.log('success Mutation action');
      actionRevalidate({ tag: 'example' });
      close();
      methods.reset();
    },
    onError: (err) => {
      console.log('error Mutation action');
      console.log({ err });
    },
    onMutate: (v) => {
      console.log(v, 'onMutate');
      if (!onlineManager.isOnline()) {
        console.log(
          'anda sedang offline, form tersimpan dipenyimpanan sementara',
        );
        close();
        methods.reset();
      }
    },
  });

  console.log('onlineManager', onlineManager.isOnline());

  queryClient.setMutationDefaults(['createExample'], {
    // MUTATE AFTER ONLINE
    mutationFn: async (props: ExampelValues) => {
      console.log(props);
      // to avoid clashes with our optimistic update when an offline mutation continues
      return mutationExample({ title: props.title, author: props.author });
    },
    onSuccess: () => {
      actionRevalidate({ tag: 'example' });
    },
    // onError: () => {
    //   console.log('error default');
    // },
  });

  const handleSubmitForm: SubmitHandler<ExampelValues> = async (value) => {
    mutate({ title: value.title, author: value.author });
  };

  return (
    <DashboardWrapper
      renderItem={<ControlPanel openModal={open} />}
      paperProps={{
        py: 'xl',
      }}
    >
      <CommonDataTable
        tableProps={{
          records: data,
          columns: [
            {
              accessor: 'id',
              title: '#',
              sortable: true,
              width: '0%',
            },
            { accessor: 'title' },
            {
              accessor: 'author',
              render: ({ author }) => (
                <Box fw={700} c='blue'>
                  {author}
                </Box>
              ),
            },
            { accessor: 'createdAt' },
          ],
          totalRecords: 40,
          recordsPerPage: l,
          page: p,
          onPageChange: (e) => setQueryParams({ p: e }),
          paginationSize: 'xs',
          loadingText: 'Loading...',
          noRecordsText: 'No records found',
          paginationText: ({ from, to, totalRecords }) => (
            <Text component='span' fw={500} c='brown'>
              Records {from} - {to} of {totalRecords}
            </Text>
          ),
        }}
      />
      <FormModal
        methods={methods}
        submitForm={handleSubmitForm}
        opened={opened}
        onClose={close}
        isLoading={!isPaused && isPending}
      />
    </DashboardWrapper>
  );
}
