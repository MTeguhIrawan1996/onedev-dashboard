'use client';

import { Box, Text } from '@mantine/core';
import { useQueryStates } from 'nuqs';
import * as React from 'react';

import { CommonDataTable } from '@/components/elements/DataTable';

import { IExampleResponse } from '@/services/rest-api/useReadAllExample';
import { examplesParsers } from '@/utils/lib/searchParams';

type IProps = {
  data: IExampleResponse[];
};

export function ClientDataTable({ data }: IProps) {
  const [queryParams, setQueryParams] = useQueryStates(examplesParsers, {
    shallow: false,
  });

  const { l, p } = queryParams;

  return (
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
        totalRecords: 20,
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
  );
}
