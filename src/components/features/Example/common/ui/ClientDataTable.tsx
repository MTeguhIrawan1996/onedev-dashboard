'use client';

import { Box, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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

  const { l, p } = queryParams;

  const methods = useForm<any>({
    // resolver: zodResolver(locationMutationValidation),
    defaultValues: {
      title: '',
      author: '',
    },
    mode: 'onBlur',
  });

  const { mutate, isPending } = useMutationExampel({
    onSuccess: () => {
      actionRevalidate({ tag: 'example' });
      close();
      methods.reset();
    },
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
        isLoading={isPending}
      />
    </DashboardWrapper>
  );
}
