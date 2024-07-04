import { useQuery } from '@tanstack/react-query';

import { db } from '@/services/dexie/db';
import api from '@/services/rest-api/api';

export type IExampleResponse = {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  isTemporary: boolean;
};

export type IRequest = {
  page: number;
  limit: number;
  search: string;
};

export const exampleKeys = {
  all: () => ['example'],
  list: (props: Partial<IRequest>) => [...exampleKeys.all(), { ...props }],
  post: () => [...exampleKeys.all(), 'post'],
  sync: () => [...exampleKeys.all(), 'sync'],
};

export async function getData({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>): Promise<IExampleResponse[]> {
  const res = await fetch(
    `https://66724f8a6ca902ae11afcca9.mockapi.io/api/v1/books?page=${page}&limit=${limit}&search=${search}`,
    { next: { revalidate: 1200, tags: ['example'] } },
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const data: IExampleResponse[] = await res.json();
  return data;
}

export const getBooksIndexDB = async () => {
  return db.books.toArray();
};

export const readAllClientExample = async ({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>) => {
  const response = await api.get<IExampleResponse[]>(
    `/api/v1/books?page=${page}&limit=${limit}&search=${search}`,
  );
  // console.log(response);
  return response.data;
};

export const useReadAllClientExample = ({
  page = 1,
  limit = 10,
  search = '',
}: Partial<IRequest>) => {
  return useQuery<IExampleResponse[]>({
    queryKey: exampleKeys.list({ limit, page, search }),
    queryFn: () => readAllClientExample({ limit, page, search }),
    select: (data) => {
      const newData: IExampleResponse[] = data.map((v) => {
        const newObj = {
          ...v,
          isTemporary: v.isTemporary ? v.isTemporary : false,
        };
        return newObj;
      });
      return newData;
    },
  });
};
