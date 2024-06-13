'use client';

import { Box, Text } from '@mantine/core';
import * as React from 'react';

import { CommonDataTable } from '@/components/elements/DataTable';

export function ClientDataTable() {
  const [page, setPage] = React.useState<number>(1);

  return (
    <CommonDataTable
      tableProps={{
        records: [
          { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
          { id: 2, name: 'Joe', bornIn: 1888, party: 'asdasd' },
        ],
        columns: [
          {
            accessor: 'id',
            title: '#',
            sortable: true,
            width: '0%',
          },
          { accessor: 'name' },
          {
            accessor: 'party',
            render: ({ party }) => (
              <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
                {party.slice(0, 3).toUpperCase()}
              </Box>
            ),
          },
          { accessor: 'bornIn' },
        ],
        totalRecords: 50,
        recordsPerPage: 2,
        page,
        onPageChange: (e) => setPage(e),
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
