/* eslint-disable no-console */

'use client';

import { Badge, Box, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { onlineManager } from '@tanstack/react-query';
import { useQueryStates } from 'nuqs';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { CommonDataTable, PrimaryButton } from '@/components/elements';
import { DashboardWrapper } from '@/components/layout';
import { ControlPanel, FormModal } from '@/components/ui';

import {
  ExampelValues,
  useMutationExampel,
  useMutationExampelSync,
} from '@/services/rest-api/example/useCreateExample';
import { useReadAllClientExample } from '@/services/rest-api/example/useReadAllExample';
import { examplesParsers } from '@/utils/lib/searchParams';

// type IProps = {
//   data: IExampleResponse[];
// };

export function ClientDataTable() {
  const [queryParams, setQueryParams] = useQueryStates(examplesParsers, {
    shallow: false,
  });
  const [opened, { open, close }] = useDisclosure(false);
  // const queryClient = useQueryClient();

  const { l, p, search } = queryParams;
  // queryClient.setMutationDefaults(exampleKeys.all(), {
  //   // MUTATE AFTER ONLINE
  //   mutationFn: mutationExample,
  //   onSuccess: () => {
  //     console.log('succes After Offline');
  //   },
  //   // onError: () => {
  //   //   console.log('error default');
  //   // },
  // });

  const { data: exampleData, isPending: isPandingReadAll } =
    useReadAllClientExample({
      page: p,
      limit: l,
      search,
    });

  const methods = useForm<ExampelValues>({
    // resolver: zodResolver(locationMutationValidation),
    defaultValues: {
      title: '',
      author: '',
    },
    mode: 'onBlur',
  });

  const { mutateAsync, isPaused, isPending } = useMutationExampel({
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
    onError: () => {
      console.log('error Mutation action');
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

  const { mutate, isPending: isPendingSync } = useMutationExampelSync({
    qKeyProps: {
      limit: l,
      page: p,
      search,
    },
  });

  const handleSubmitForm: SubmitHandler<ExampelValues> = async (value) => {
    await mutateAsync({
      title: value.title,
      author: value.author,
    });
  };

  const isOnline = onlineManager.isOnline();

  return (
    <DashboardWrapper
      renderItem={<ControlPanel openModal={open} />}
      paperProps={{
        py: 'xl',
      }}
    >
      <Badge>{isOnline ? 'ONLINE' : 'OFFLINE'}</Badge>
      <PrimaryButton
        label={`Sync ${isPendingSync ? 'sync....' : 'complated'}`}
        onClick={() => mutate()}
      />
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
