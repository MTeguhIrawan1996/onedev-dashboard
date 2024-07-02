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

import {
  ExampelValues,
  mutationExample,
  useMutationExampel,
} from '@/services/rest-api/useCreateExample';
import {
  exampleKeys,
  useReadAllClientExample,
} from '@/services/rest-api/useReadAllExample';
import { examplesParsers } from '@/utils/lib/searchParams';

// type IProps = {
//   data: IExampleResponse[];
// };

export function ClientDataTable() {
  const [queryParams, setQueryParams] = useQueryStates(examplesParsers, {
    shallow: false,
  });
  const [opened, { open, close }] = useDisclosure(false);
  const queryClient = useQueryClient();

  const { l, p, search } = queryParams;
  queryClient.setMutationDefaults(exampleKeys.all(), {
    // MUTATE AFTER ONLINE
    mutationFn: async (props: ExampelValues) => {
      console.log('Mutation OFFLINE');
      await queryClient.cancelQueries({
        queryKey: exampleKeys.list({ limit: l, page: p, search }),
      });
      return mutationExample({ title: props.title, author: props.author });
    },
    onSuccess: () => {
      console.log('succes After Offline');
    },
    // onError: () => {
    //   console.log('error default');
    // },
  });

  const { data: exampleData, isPending: isPandingReadAll } =
    useReadAllClientExample({
      page: p,
      limit: l,
      search,
    });

  const methods = useForm<any>({
    // resolver: zodResolver(locationMutationValidation),
    defaultValues: {
      title: '',
      author: '',
    },
    mode: 'onBlur',
  });

  const { mutate, isPaused, isPending } = useMutationExampel({
    qKeyProps: {
      limit: l,
      page: p,
      search,
    },
    onSuccess: () => {
      console.log('success Mutation action');
      // actionRevalidate({ tag: 'example' });
      close();
      methods.reset();
    },
    onError: (err) => {
      console.log('error Mutation action');
      console.log({ err });
    },
    onMutate: () => {
      if (!onlineManager.isOnline()) {
        console.log(
          'anda sedang offline, form tersimpan dipenyimpanan sementara',
        );
        close();
        methods.reset();
      }
    },
  });

  console.log(isPaused);

  console.log('onlineManager', onlineManager.isOnline());

  console.log(exampleData);

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
          records: exampleData || [],
          fetching: isPandingReadAll,
          columns: [
            {
              accessor: 'id',
              title: '#',
              sortable: true,
              width: '0%',
              render: (record) =>
                exampleData ? exampleData.indexOf(record) + 1 : 1,
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
            {
              accessor: 'status',
              render: ({ isTemporary }) => (
                <Box fw={700} c='blue'>
                  {isTemporary ? 'Temporary' : 'Draft'}
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
